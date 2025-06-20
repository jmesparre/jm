import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  const brevoApiKey = process.env.BREVO_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL || 'jmesparre@gmail.com';

  if (!brevoApiKey) {
    return NextResponse.json({ message: 'Brevo API key not configured' }, { status: 500 });
  }

  const data = {
    sender: { email: contactEmail, name: 'Juan Manuel Esparré' },
    to: [{ email: contactEmail, name: 'Juan Manuel Esparré' }],
    subject: `Nuevo mensaje de contacto de ${name}`,
    htmlContent: `
      <html>
        <head></head>
        <body>
          <p>Has recibido un nuevo mensaje de contacto:</p>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email del remitente:</strong> ${email}</p>
          <p><strong>Mensaje:</strong> ${message}</p>
        </body>
      </html>
    `,
  };

  try {
    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': brevoApiKey,
      },
      body: JSON.stringify(data),
    });

    if (brevoResponse.ok) {
      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } else {
      const errorData = await brevoResponse.json();
      console.error('Error sending email via Brevo API:', errorData);
      return NextResponse.json({ message: errorData.message || 'Error sending email via Brevo API' }, { status: brevoResponse.status });
    }
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
