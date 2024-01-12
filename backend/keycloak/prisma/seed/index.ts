import { PrismaClient } from "@prisma/client";
import { createBooks } from "./create-books";
import { deleteBooks } from "./delete-books";

const prisma = new PrismaClient();

const main = async () => {
  await deleteBooks();
  await createBooks();
}

main()
  .catch(error => console.log(error))
  .finally(async () => await prisma.$disconnect());
