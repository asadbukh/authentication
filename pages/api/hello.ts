// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import dbConnect from "../../utils/dbConnect";

dbConnect();

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  console.log(req.method)
  res.status(200).json({ name: 'John Doe' })
}
