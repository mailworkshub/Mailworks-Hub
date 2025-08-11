import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export async function POST(req: NextRequest) {
  try {
    const isJson = req.headers.get("content-type")?.includes("application/json");
    const body = isJson ? await req.json() : await req.formData();
    const name = isJson ? body.name : body.get("name");
    const email = isJson ? body.email : body.get("email");
    const subject = isJson ? body.subject : body.get("subject");
    const message = isJson ? body.message : body.get("message");

    if (!process.env.SENDGRID_API_KEY || !process.env.CONTACT_TO_EMAIL) {
      return NextResponse.json({ error: "Missing SENDGRID_API_KEY or CONTACT_TO_EMAIL" }, { status: 400 });
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
    const msg = {
      to: process.env.CONTACT_TO_EMAIL as string,
      from: (process.env.CONTACT_FROM_EMAIL as string) || (process.env.CONTACT_TO_EMAIL as string),
      subject: `[Mailworks Hub] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    };
    await sgMail.send(msg as any);
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Failed to send" }, { status: 500 });
  }
}
