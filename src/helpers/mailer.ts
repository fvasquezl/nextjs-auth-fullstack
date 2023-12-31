import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    //create a hashed token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);
    //create transport
    if (emailType === "VERIFY") {
      await User.findOneAndUpdate(userId, {
        veryfyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findOneAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "836016ccc8edf0",
        pass: "4d1716c05ab35a",
      },
    });

    const mailOptions = {
      from: "vasquez.limon@gmail.com",
      to: email,
      subject: emailType === "VERIFY" ? "Verify Email" : "Reset Password",
      html: `<h1>Hello ${email}</h1>
      <p>Click 
      <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a>
      to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
      }<br>or copy and paste the link below in your browser.<br> 
      ${process.env.DOMAIN}/verifyemail?token=${hashedToken}</p>`,
    };
    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
