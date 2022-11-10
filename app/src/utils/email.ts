import Mailjet from 'node-mailjet'

const SEND_ADDRESS = 'ztb@proton.me'
// const SEND_ADDRESS = 'early@oceanview.fi'
const SEND_NAME = "Oceanview Team"

export async function sendEarlyAccessEmail(destination: string) {
  const mailjet = new Mailjet({
    apiKey: process.env.MAILJET_API_KEY,
    apiSecret: process.env.MAILJET_SECRET_KEY,
  })

  const data = {
    "FromEmail": SEND_ADDRESS,
    "FromName": SEND_NAME,
    "Subject": 'Oceanview Early Access',
    "Html-part": '<h3>Thank you for your interest in Oceanview!</h3><br /><p>We are excited to have you as an early access user! Keep an eye on your inbox as new features are announced! Early access members will be the first to try out these features in the wild, and your feedback is very much appreciated! If at any time you wish to reach out to me about Oceanview, feel free! I can be reached at ztb@pm.me.</p>',
    "Text-part": 'Thank you for your interest in Oceanview! We are excited to have you as an early access user! Keep an eye on your inbox as new features are announced! Early access members will be the first to try out these features in the wild, and your feedback is very much appreciated! If at any time you wish to reach out to me about Oceanview, feel free! I can be reached at ztb@pm.me.',
    "Recipients": [{ "Email": destination }]
  }

  await mailjet.post('send').request(data);
}
