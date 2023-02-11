import * as AWS from "aws-sdk";
import * as nodemailer from "nodemailer";
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "us-east-1",
});
AWS.config.getCredentials(function (error) {
    if (error) {
        console.log(error.stack);
    }
});
const ses = new AWS.SES({ apiVersion: "2010-12-01" });

// change this to the "to" email that you want
const adminMail = "kaustubh.bhardwaj86@gmail.com";
// Create a transporter of nodemailer
const transporter = nodemailer.createTransport({
    SES: ses,
});
export const sendConsultationSchedulingEmail = async (userEmail) => {
  try {
    const response = await transporter.sendMail({
      from: adminMail,
      to: userEmail,
      subject: "[HeyCoach] First Step to a Healthier You: Schedule a Free Consultation",
      html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
        <html>
          <head>
            <style>
              /* Add any custom styles here */
              p {
                font-size: 16px;
                line-height: 1.5;
                margin: 0 0 10px 0;
              }
              .coach-message {
                margin: 10px 0;
                background: whitesmoke;
                padding: 20px 40px;
                border-radius: 6px;
              }
            </style>
          </head>
          <body>
            <div>
              <div>A message from Prathna:</div>
              <div class="coach-message">
                <p>Hi there,</p>

                <p>Thanks for signing up for the waitlist!</p>

                <p>You can use this link to schedule your <b>free</b> consultation: https://calendly.com/k-bard/30min</p>

                <p>
                  We can use the time to discuss your health goals and how I can help you achieve them.
                  We can talk about anything at all, so please bring any questions you have!
                </p>

                <p>
                  I look forward to meeting you!
                </p>

                <p>Wishing you all the best, <br/> Prathna</p>
              </div>
            </div>
          </body>
        </html>
        `,
    });
    return response?.messageId
      ? { ok: true }
      : { ok: false, msg: "Failed to send email" };
  } catch (error) {
    console.log("ERROR", error.message);
    return { ok: false, msg: "Failed to send email" };
  }
};