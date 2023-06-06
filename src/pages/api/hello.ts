// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      res.status(200).json("부트캠프 API입니다!")
      break
    case 'POST':
      res.status(200).json("POST 요청입니다!")
      break
  }
}
