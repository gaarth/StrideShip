import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { inquiryType, companyName, email, contactPerson } = body;

    // Basic validation
    if (!inquiryType || !companyName || !email || !contactPerson) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields (inquiryType, companyName, contactPerson, email)",
        },
        { status: 400 }
      );
    }

    if (inquiryType !== "manufacturer" && inquiryType !== "buyer") {
      return NextResponse.json(
        { success: false, error: "Invalid inquiryType. Must be 'manufacturer' or 'buyer'" },
        { status: 400 }
      );
    }

    // Stub payload structure ready for CRM / Email service integration (e.g. Resend, SendGrid, Webhook)
    const processedSubmission = {
      id: `exp_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      receivedAt: new Date().toISOString(),
      inquiryType,
      companyName: companyName.trim(),
      contactPerson: contactPerson.trim(),
      email: email.trim().toLowerCase(),
      phone: body.phone ? body.phone.trim() : null,
      message: body.message ? body.message.trim() : null,

      // Target recipients
      recipients: ["siddhantvaidya70@gmail.com", "gaarth.godbole07@gmail.com"],

      // Manufacturer specific fields
      category: body.category || null,
      exportStatus: body.exportStatus || null,
      monthlyCapacity: body.monthlyCapacity || null,

      // Buyer specific fields
      country: body.country || null,
      productsOfInterest: body.productsOfInterest || null,
      orderVolume: body.orderVolume || null,
    };

    // Log internally for dev/auditing
    console.log("[StrideShip Exports Inquiry Submitted]:", JSON.stringify(processedSubmission, null, 2));

    return NextResponse.json({
      success: true,
      message:
        inquiryType === "manufacturer"
          ? "Thank you for reaching out. Our export JV team will evaluate your product category and contact you within 24 hours."
          : "Inquiry received. Our international trade desk will prepare a product specification breakdown and contact you within 24 hours.",
      referenceId: processedSubmission.id,
    });
  } catch (error) {
    console.error("[StrideShip Exports API Error]:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error processing inquiry." },
      { status: 500 }
    );
  }
}
