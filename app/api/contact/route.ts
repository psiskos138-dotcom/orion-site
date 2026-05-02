import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const {
    companyName,
    contactName,
    email,
    whatsapp,
    role,
    commodity,
    originLocation,
    volume,
    overview,
    documentationAvailable,
  } = await request.json();

  try {
    await resend.emails.send({
      from: 'Orion Contact <info@otlnyc.com>',
      to: 'info@otlnyc.com',
      subject: `New Inquiry — ${companyName}`,
      html: `
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Contact Name:</strong> ${contactName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>You are:</strong> ${role}</p>
        <p><strong>Commodity:</strong> ${commodity}</p>
        <p><strong>Origin / Location:</strong> ${originLocation}</p>
        <p><strong>Volume:</strong> ${volume}</p>
        <p><strong>Documentation Available:</strong> ${documentationAvailable}</p>
        <p><strong>Brief Overview:</strong></p>
        <p>${overview}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
