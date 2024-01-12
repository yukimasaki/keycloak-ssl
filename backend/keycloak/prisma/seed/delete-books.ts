import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const deleteBooks = async () => {
  await prisma.book.deleteMany();
}
