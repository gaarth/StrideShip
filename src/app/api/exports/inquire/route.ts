import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_12345");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      inquiryType, 
      name, 
      email, 
      companyName, 
      profileLink, 
      address, 
      yearsInBusiness, 
      productOfInterest, 
      customProduct 
    } = body;

    // Basic validation
    if (!inquiryType || !companyName || !email || !name) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields.",
        },
        { status: 400 }
      );
    }

    const isBuyer = inquiryType === "buyer";
    const product = productOfInterest === "Other" ? customProduct : productOfInterest;

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #0f172a; border-bottom: 2px solid #0f172a; padding-bottom: 10px;">New ${isBuyer ? 'Buyer' : 'Manufacturer'} Inquiry</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; width: 35%;">Name</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Email</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Company Name</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${companyName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Profile Link</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><a href="${profileLink}" target="_blank">${profileLink || 'N/A'}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Product ${isBuyer ? 'of Interest' : 'Manufactured'}</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${product || 'N/A'}</td>
          </tr>
          ${!isBuyer ? `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Address</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${address || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Years in Business</td>
            <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${yearsInBusiness || 'N/A'}</td>
          </tr>
          ` : ''}
        </table>
        
        <p style="margin-top: 30px; font-size: 12px; color: #64748b; text-align: center;">
          Sent from StrideShip Exports Form
        </p>
      </div>
    `;

    // Only attempt to send email if API key is actually set, otherwise just log to prevent 500 error
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "StrideShip Exports <inquiries@strideship.dev>",
        to: ["ceo@strideship.dev"],
        subject: `New ${isBuyer ? 'Buyer' : 'Manufacturer'} Inquiry - ${companyName}`,
        html: htmlContent,
      });
    } else {
      console.log("Mock Email Sent (No RESEND_API_KEY):", htmlContent);
    }

    return NextResponse.json({
      success: true,
      message: "Form successfully submitted.",
    });
  } catch (error) {
    console.error("[StrideShip Exports API Error]:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error processing inquiry." },
      { status: 500 }
    );
  }
}
