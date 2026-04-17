import type { APIRoute } from "astro";

// Disable pre-rendering to handle requests dynamically on the server
export const prerender = false;
import nodemailer from "nodemailer";

/**
 * POST endpoint to handle the contact form.
 * Receives form data and sends an email via Nodemailer.
 */
export const POST: APIRoute = async ({ request }) => {
  try {
    // Extract form data sent by the client
    const data = await request.formData();
    const name = data.get("name");
    const surname = data.get("surname");
    const email = data.get("email");
    const message = data.get("message");

    // Basic validation: ensure all required fields are present
    if (!name || !surname || !email || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter (SMTP for Gmail)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for port 465, false for others
      auth: {
        user: import.meta.env.EMAIL_USER, // User configured in .env
        pass: import.meta.env.EMAIL_PASS, // App password configured in .env
      },
    });

    // Send the email with HTML formatting
    await transporter.sendMail({
      from: `"Pau Segués Web Contact" <${import.meta.env.EMAIL_USER}>`,
      to: import.meta.env.EMAIL_TO, // Recipient configured in .env
      subject: "New contact message from Pau Segués Web",
      html: `
        <h2>New contact message from Pau Segués Web</h2>
        <p><strong>Name:</strong> ${name.toString()} ${surname.toString()}</p>
        <p><strong>Email:</strong> ${email.toString()}</p>
        <p><strong>Message:</strong><br>${message.toString().replace(/\n/g, "<br>")}</p>
        <hr>
        <p>Message sent from PauSegués - Web</p>
      `,
    });

    // Return a success response in JSON format
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    // Catch server or sending errors and return a 500 error
    console.error("Error sending email:", err);
    return new Response(JSON.stringify({ ok: false, error: "Server Error" }), { status: 500 });
  }
};