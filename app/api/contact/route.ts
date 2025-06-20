import { NextResponse } from 'next/server';
import { Configuration, TransactionalEmailsApi, SendSmtpEmail } from '@getbrevo/brevo';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  const apiInstance = new TransactionalEmailsApi(new Configuration({
    apiKey: process.env.BREVO_API_KEY as string,
  }));

  const sendSmtpEmail = new SendSmtpEmail();

  sendSmtpEmail.sender = { email: email, name: name };
  sendSmtpEmail.to = [{ email: process.env.CONTACT_EMAIL || 'jmesparre@gmail.com', name: 'Juan Manuel Esparré' }];
  sendSmtpEmail.subject = `Nuevo mensaje de contacto de ${name}`;
  sendSmtpEmail.htmlContent = `
    <html>
      <head></head>
      <body>
        <p>Has recibido un nuevo mensaje de contacto:</p>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      </body>
    </html>
  `;

  try {
    await apiInstance.sendTransacEmail(sendSmtpEmail);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
