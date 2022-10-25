import Mailjet, { SendEmailV3_1 } from 'node-mailjet'

const SEND_ADDRESS = 'testing@oceanview.so'
const ERROR_ADDRESS = 'error@oceanview.so'

async function sendEarlyAccessEmail(destination: string) {
  const mailjet = new Mailjet({
    apiKey: process.env.MAILJET_API_KEY,
    apiSecret: process.env.MAILJET_SECRET_KEY,
  })

  const data: SendEmailV3_1.IBody = {
    Messages: [
      {
        From: {
          Email: SEND_ADDRESS
        },
        To: [
          {
            Email: destination
          }
        ],
        TemplateErrorReporting: {
          Email: ERROR_ADDRESS,
          Name: "Reporter"
        },
        Subject: 'Oceanview Early Access',
        HTMLPart: '<h3>Thank you for your interest in Oceanview!</h3><br /><p>We are excited to have you as an early access user! Keep an eye on your inbox as new features are announced! Early access members will be the first to try out these features in the wild, and your feedback is very much appreciated! If at any time you wish to reach out to me about Oceanview, feel free! I can be reached <a href="mailto:ztb@pm.me?subject=Oceanview Feedback">Here!</a></p>',
        TextPart: 'Thank you for your interest in Oceanview! We are excited to have you as an early access user! Keep an eye on your inbox as new features are announced! Early access members will be the first to try out these features in the wild, and your feedback is very much appreciated! If at any time you wish to reach out to me about Oceanview, feel free! I can be reached at ztb@pm.me.',
      }
    ]
  }

  const result = await mailjet
    .post('send', { version: 'v3.1' })
    .request(data);
}