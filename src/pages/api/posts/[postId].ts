import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postId = req.query.postId
  const orderBy = req.query.orderBy

  switch (req.method) {
    case 'GET':
      res.status(200).json(`postId는 ${postId}입니다. ${orderBy}로 정렬합니다.`)
      break
  }
}
