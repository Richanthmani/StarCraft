import nodemailer from "nodemailer";

function esc(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function validateFields(body) {
  const required = [
    ["companyName", 200],
    ["industry", 100],
    ["location", 200],
    ["employees", 50],
    ["phone", 30],
    ["email", 254],
    ["mealReq", 2000],
  ];

  for (const [field, maxLen] of required) {
    const val = body[field];
    if (typeof val !== "string" || val.trim().length === 0) {
      return `Missing required field: ${field}`;
    }
    if (val.length > maxLen) {
      return `Field "${field}" exceeds maximum length of ${maxLen} characters.`;
    }
  }

  const emailVal = body["email"];
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
    return "Invalid email address.";
  }

  const specialReq = body["specialReq"];
  if (specialReq && typeof specialReq === "string" && specialReq.length > 2000) {
    return "Special requirements field is too long.";
  }

  return null;
}

function buildHtml(body) {
  const rows = [
    ["Company Name", body.companyName],
    ["Industry", body.industry],
    ["Location", body.location],
    ["Number of Employees", body.employees],
    ["Preferred Start Date", body.startDate || "—"],
    ["Phone", body.phone],
    ["Work Email", body.email],
    ["Meal Requirements", body.mealReq],
    ["Special Requirements", body.specialReq || "—"],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:10px 14px;background:#f5f5f5;font-weight:600;color:#333;white-space:nowrap;border-bottom:1px solid #e0e0e0;vertical-align:top">${esc(label)}</td>
        <td style="padding:10px 14px;color:#555;border-bottom:1px solid #e0e0e0;white-space:pre-wrap">${esc(value)}</td>
      </tr>`,
    )
    .join("");

  return `
    <div style="font-family:Inter,Arial,sans-serif;max-width:640px;margin:0 auto;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden">
      <div style="background:#1E5631;padding:24px 28px">
        <h1 style="color:#fff;margin:0;font-size:20px;font-weight:700">New Enquiry — StarCraft Foods &amp; Services</h1>
      </div>
      <div style="padding:24px 28px">
        <p style="margin:0 0 20px;color:#555">A new catering enquiry has been submitted via your website.</p>
        <table style="width:100%;border-collapse:collapse;border-radius:6px;overflow:hidden;border:1px solid #e0e0e0">
          ${tableRows}
        </table>
        <p style="margin:24px 0 0;font-size:13px;color:#999">Sent automatically from the StarCraft Foods website.</p>
      </div>
    </div>`;
}

export default async function handler(request) {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  const body = await request.json();
  const validationError = validateFields(body);

  if (validationError) {
    return Response.json({ error: validationError }, { status: 400 });
  }

  const fields = {
    companyName: (body.companyName || "").trim(),
    industry: (body.industry || "").trim(),
    location: (body.location || "").trim(),
    employees: (body.employees || "").trim(),
    startDate: typeof body.startDate === "string" ? body.startDate.trim() : "",
    phone: (body.phone || "").trim(),
    email: (body.email || "").trim(),
    mealReq: (body.mealReq || "").trim(),
    specialReq: typeof body.specialReq === "string" ? body.specialReq.trim() : "",
  };

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "");
  const secure = process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const from = process.env.MAIL_FROM || user;
  const to = process.env.ENQUIRY_TO_EMAIL || user;

  if (!host || !port || Number.isNaN(port) || !user || !pass || !from) {
    return Response.json({ error: "Email service is not configured." }, { status: 503 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: fields.email,
      subject: `New Enquiry from ${fields.companyName} (${fields.industry})`,
      html: buildHtml(fields),
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Failed to send enquiry email:", error);
    const smtpError = error;
    if (smtpError.code === "EAUTH") {
      return Response.json(
        {
          error:
            "SMTP authentication failed. Check SMTP_USER, SMTP_PASSWORD, and the hosting mail server settings.",
        },
        { status: 401 },
      );
    }

    return Response.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}
