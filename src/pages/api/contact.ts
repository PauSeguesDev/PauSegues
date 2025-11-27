import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get("name");
    const surname = data.get("surname");
    const email = data.get("email");
    const message = data.get("message");

    if (!name || !surname || !email || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const recaptchaResponse = data.get("g-recaptcha-response");
    if (!recaptchaResponse) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing reCAPTCHA" }),
        { status: 400 }
      );
    }

    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${
      import.meta.env.RECAPTCHA_SECRET_KEY
    }&response=${recaptchaResponse}`;
    const verifyResponse = await fetch(verifyUrl, { method: "POST" });
    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      return new Response(
        JSON.stringify({ ok: false, error: "Invalid reCAPTCHA" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: import.meta.env.EMAIL_USER,
        pass: import.meta.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Contacte Pau Segués Web" <${import.meta.env.EMAIL_USER}>`,
      to: import.meta.env.EMAIL_TO,
      subject: "Nou missatge del contacte de Pau Segués Web",
      html: `
        <h2>Nou missatge del contacte de Pau Segués Web</h2>
        <p><strong>Nom:</strong> ${name.toString()} ${surname.toString()}</p>
        <p><strong>Email:</strong> ${email.toString()}</p>
        <p><strong>Missatge:</strong><br>${message
          .toString()
          .replace(/\n/g, "<br>")}</p>
        <hr>
        <p>Missatge enviat desde el formulari de contacte</p>
      `,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ ok: false }), { status: 500 });
  }
};
