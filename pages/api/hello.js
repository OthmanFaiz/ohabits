// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async (req, res) => {
  const user = await prisma.user.findMany()
  res.json(user)
}