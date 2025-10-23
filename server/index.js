import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/send-email", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message, smtpUser, smtpPass } = req.body || {};

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const user = process.env.SMTP_USER || smtpUser;
    const pass = process.env.SMTP_PASS || smtpPass;
    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = Number(process.env.SMTP_PORT || 587);
    const secure = String(process.env.SMTP_SECURE || "false").toLowerCase() === "true";
    const to = process.env.EMAIL_TO || "sahmedwaqas2019@gmail.com";

    if (!user || !pass) {
      return res.status(500).json({ error: "SMTP credentials not configured" });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const subject = "Lead from DomusProperties.pk";
    const text = `Lead Details\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message}`;
    const html = `<p><strong>Lead Details</strong></p>
      <p><strong>Name:</strong> ${firstName} ${lastName}<br/>
      <strong>Email:</strong> ${email}<br/>
      <strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Message:</strong><br/>${String(message).replace(/\n/g, "<br/>")}</p>`;

    const info = await transporter.sendMail({
      from: user,
      to,
      subject,
      text,
      html,
      replyTo: email,
    });

    return res.json({ ok: true, messageId: info.messageId });
  } catch (err) {
    console.error("/api/send-email error", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Email server listening on http://localhost:${PORT}`);
});


