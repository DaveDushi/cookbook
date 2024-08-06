// @ts-ignore
import nodemailer from "nodemailer";
import { emailTemplate } from "./emailTemplate";

const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

const subject = "CookedUp Recipe";

// @ts-ignore
const sendEmail = (emailTo, recipe) => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: user,
        pass: pass,
      },
    });

    const mailOptions = {
      from: user,
      to: emailTo,
      subject: subject,
      html: emailTemplate(recipe),
    };

    // @ts-ignore
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info.response);
      }
    });
  });
};

export default sendEmail;
