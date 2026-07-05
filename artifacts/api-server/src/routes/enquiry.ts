import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

const TO_EMAIL = "thalluri.richanthmani1302@gmail.com";

function buildHtml(body: Record<string, string>): string {
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
  ]
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:10px 14px;background:#f5f5f5;font-weight:600;color:#333;white-space:nowrap;border-bottom:1px solid #e0e0e0">${label}</td>
        <td style="padding:10px 14px;color:#555;border-bottom:1px solid #e0e0e0">${value}</td>
      </tr>`,
    )
    .join("");

  return `
    <div style="font-family:Inter,Arial,sans-serif;max-width:640px;margin:0 auto;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden">
      <div style="background:#1E5631;padding:24px 28px">
        <h1 style="color:#fff;margin:0;font-size:20px;font-weight:700">New Enquiry — StarCraft Foods & Services</h1>
      </div>
      <div style="padding:24px 28px">
        <p style="margin:0 0 20px;color:#555">A new catering enquiry has been submitted via your website.</p>
        <table style="width:100%;border-collapse:collapse;border-radius:6px;overflow:hidden;border:1px solid #e0e0e0">
          ${rows}
        </table>
        <p style="margin:24px 0 0;font-size:13px;color:#999">Sent automatically from starcraft-foods.replit.app</p>
      </div>
    </div>`;
}

router.post("/enquiry", async (req, res) => {
  const {
    companyName,
    industry,
    location,
    employees,
    startDate,
    phone,
    email,
    mealReq,
    specialReq,
  } = req.body as Record<string, string>;

  // Basic validation
  if (!companyName || !industry || !location || !employees || !phone || !email || !mealReq) {
    res.status(400).json({ error: "Missing required fields." });
    return;
  }

  const gmailUser = process.env["GMAIL_USER"];
  const gmailPass = process.env["GMAIL_APP_PASSWORD"];

  if (!gmailUser || !gmailPass) {
    res.status(503).json({ error: "Email service is not configured." });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });

    await transporter.sendMail({
      from: `"StarCraft Foods Website" <${gmailUser}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Enquiry from ${companyName} (${industry})`,
      html: buildHtml({
        companyName,
        industry,
        location,
        employees,
        startDate,
        phone,
        email,
        mealReq,
        specialReq,
      }),
    });

    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
});

export default router;
