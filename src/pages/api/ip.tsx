// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/primsa'

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  let myIp = ''
  try {
    const { data } = await axios.get('https://api.ipify.org/?format=json')
    myIp = data.ip
    // console.log('myIp', myIp)
  } catch (err) {
    console.log('myIp erro')
    return res.status(400).json({ success: false })
  }
  try {
    const now = new Date()
    const timezoneOffset = now.getTimezoneOffset()
    const timezoneOffsetHours = timezoneOffset / 60
    now.setHours(now.getHours() - timezoneOffsetHours)
    const ip = await prisma.ip.create({
      data: { ip: myIp, createdAt: now.toISOString() },
    })
    return res.status(201).json({ ip })
  } catch (error) {
    console.log('erro', error)
    return res.status(400).json({ success: false })
  }
}
