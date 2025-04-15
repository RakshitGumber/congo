import { Resend } from "resend";
import VerificationEmail from "@/views/VerificationEmail";
import { config } from "dotenv";

config();

if (process.env.RESEND_API_KEY === undefined)
  throw new Error("Missing RESEND_API_KEY environment variable");

export const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (
  email: string,
  firstName: string,
  verificationUrl: string
) => {
  try {
    await resend.emails.send({
      from: "Congo <Congo@resend.dev>",
      to: email,
      subject: "Verify your account",
      react: VerificationEmail({
        userFirstname: firstName,
        verificationUrl,
      }),
    });

    return { success: true };
  } catch (error) {
    return { success: false };
  }
};
