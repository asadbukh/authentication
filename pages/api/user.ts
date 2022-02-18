import dbConnect from "../../utils/dbConnect";
import Note from "../../modals/User";

import type { NextApiRequest, NextApiResponse } from 'next'

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;


  console.log(req.body);


  switch (method) {
    case 'GET':
      try {
        const notes = await Note.find({});

        res.status(200).json({ success: true, data: notes })
      } catch (error) {
        res.status(400).json({ success: false, data: error });
      }
      break;
    case 'POST':
      console.log("ji")
      try {
        const note = await Note.create(req.body);

        res.status(201).json({ success: true, data: note })
      } catch (error) {
        res.status(400).json({ success: false, data: error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}