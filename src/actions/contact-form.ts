"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

// Define form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormData = z.infer<typeof formSchema>

export async function sendContactEmail(formData: FormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(formData)

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Use an app password, not your regular password
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself
      replyTo: validatedData.email,
      subject: `Contact Form: Message from ${validatedData.name}`,
      text: `
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        
        Message:
        ${validatedData.message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message: "Your message has been sent successfully! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending email:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors.map((e) => e.message).join(", "),
      }
    }

    return {
      success: false,
      message: "Failed to send your message. Please try again later.",
    }
  }
}

