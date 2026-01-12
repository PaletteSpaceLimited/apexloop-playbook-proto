import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  jobTitle: string;
  company: string;
  employees: string;
  source: string;
  problem: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received contact form submission:", formData);

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "ApexLoop Contact Form <onboarding@resend.dev>",
        to: ["juliusleung@palettespace.org"],
        subject: `New Demo Request from ${formData.name}`,
        html: `
          <h1>New Demo Request</h1>
          <h2>Contact Information</h2>
          <ul>
            <li><strong>Name:</strong> ${formData.name}</li>
            <li><strong>Work Email:</strong> ${formData.email}</li>
            <li><strong>Phone:</strong> ${formData.phone || "Not provided"}</li>
            <li><strong>Job Title:</strong> ${formData.jobTitle}</li>
            <li><strong>Company:</strong> ${formData.company}</li>
            <li><strong>Number of Employees:</strong> ${formData.employees}</li>
            <li><strong>Source:</strong> ${formData.source || "Not specified"}</li>
          </ul>
          <h2>Problem Statement</h2>
          <p>${formData.problem || "Not provided"}</p>
          <hr />
          <p style="color: #666; font-size: 12px;">This email was sent from the ApexLoop contact form.</p>
        `,
      }),
    });

    const result = await emailResponse.json();
    console.log("Email sent successfully:", result);

    if (!emailResponse.ok) {
      throw new Error(result.message || "Failed to send email");
    }

    return new Response(JSON.stringify({ success: true, data: result }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
