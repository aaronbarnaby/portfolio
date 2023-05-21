import { NextResponse } from "next/server";
import { MailtrapClient } from 'mailtrap';

export async function POST(request: Request) {
  const res = await request.json();

  const TOKEN = process.env.MAILTRAP_TOKEN;
  const ENDPOINT = "https://send.api.mailtrap.io/";

  const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

  const sender = {
    email: "mailtrap@ajabarnaby.com",
    name: "Mailtrap Test",
  };
  
  const recipients = [
    {
      email: "aaronrosebarnaby@gmail.com",
    }
  ];

  client
    .send({
      from: sender,
      to: recipients,
      subject: "You are awesome!",
      text: "Congrats for sending test email with Mailtrap!",
      category: "Integration Test",
    })
  .then(console.log, console.error);

  return NextResponse.json({ res });
}