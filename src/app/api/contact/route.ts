// This file should be placed in the `app/api/contact` directory of your Next.js project.

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Define the email service and credentials in a .env.local file
// Example .env.local:
// EMAIL_USER="your-email@gmail.com"
// EMAIL_PASS="your-app-password"
// EMAIL_RECEIVER="your-email@gmail.com"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Message from Portfolio: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
