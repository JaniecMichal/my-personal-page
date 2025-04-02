"use server"

import { z } from "zod"

// Define a schema for input validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type ContactFormData = z.infer<typeof formSchema>

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(formData)

    // In a real application, you would send an email here
    // For now, we'll just simulate a successful email send

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return success response
    return {
      success: true,
      message: "Email sent successfully!",
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Return validation errors
      return {
        success: false,
        message: error.errors.map((e) => e.message).join(", "),
      }
    }

    // Return generic error
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    }
  }
}

