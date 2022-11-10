import type { NextApiRequest, NextApiResponse } from 'next'
import { sendEarlyAccessEmail } from 'utils/email'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const email = req.query["address"].toString()
  console.log(email)
  await sendEarlyAccessEmail(email)
  res.status(200).json({ "message": "success" })
}
