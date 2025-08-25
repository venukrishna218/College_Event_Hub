const nodemailer = require("nodemailer");

async function sendEmail({ to, subject, text, html }) {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT || 587),
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: '"College Event Hub" <no-reply@college-event-hub.dev>',
    to,
    subject,
    text,
    html,
  });
}

module.exports = sendEmail;
