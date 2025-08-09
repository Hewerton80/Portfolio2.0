// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
// // import prisma from '../../../lib/primsa'

// export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
//   const { register: myIp } = req.body
//   try {
//     const now = new Date()
//     const timezoneOffset = now.getTimezoneOffset()
//     const timezoneOffsetHours = timezoneOffset / 60
//     now.setHours(now.getHours() - timezoneOffsetHours)
//     const ip = await prisma.ip.create({
//       data: { ip: myIp, createdAt: now.toISOString() },
//     })
//     return res.status(201).json({ ip })
//   } catch (error) {
//     // console.log('erro', error)
//     // return res.status(400).json({ success: false })
//   }
// }
