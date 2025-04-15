import { sendVerificationEmail } from "@/libs/resend";
import { User } from "@/models/User";
import { genrateVerificationToken } from "@/utils/generateVerificationToken";

export default async (
  username: string,
  email: string,
  passwordHashed: string,
  firstName: string,
  lastName: string
): Promise<IConData> => {
  try {
    const existingEmail = await User.findOne({ email });

    const token = await genrateVerificationToken(email);
    const verificationUrl = `http://localhost:5173/verify?token=${token}`;

    if (existingEmail) {
      if (!existingEmail.isEmailVerified) {
        await sendVerificationEmail(email, firstName, verificationUrl);
        const data = await existingEmail.updateOne({
          username,
          email,
          password: passwordHashed,
          firstName,
          lastName,
        });

        if (!data) {
          return {
            success: false,
            message: "Error updating user",
          };
        }
        return {
          success: true,
          message: "Email sent for verification",
          data,
        };
      }
      return {
        success: false,
        message: "Email already exists",
      };
    }

    const user = await User.create({
      username,
      email,
      password: passwordHashed,
      firstName,
      lastName,
    });
    await sendVerificationEmail(email, firstName, verificationUrl);

    return {
      success: true,
      message: "User created successfully",
      data: user,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error checking email",
      error: error,
    };
  }
};
