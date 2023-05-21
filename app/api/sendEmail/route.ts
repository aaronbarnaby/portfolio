import { NextResponse } from "next/server";
import { MailtrapClient } from 'mailtrap';

export async function POST(request: Request) {
  const res = await request.json();
  console.log('sendEmail req', res);

  const TOKEN = process.env.MAILTRAP_TOKEN as string;
  const ENDPOINT = "https://send.api.mailtrap.io/";

  const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

  const sender = {
    email: "mailtrap@ajbarnaby.com",
    name: "Mailtrap Test",
  };
  
  const recipients = [
    {
      email: "aaronrosebarnaby@gmail.com",
    }
  ];

  await client
    .send({
      from: sender,
      to: recipients,
      subject: "You are awesome!",
      text: "Congrats for sending test email with Mailtrap!",
      category: "Integration Test",
    })
  .then(console.log, console.error);

  return NextResponse.json({ completed: true  });
}