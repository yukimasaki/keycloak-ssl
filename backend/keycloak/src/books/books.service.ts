import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }
  async findAll() {
    const books: Book[] = await this.prisma.book.findMany()
    if (books.length === 0) throw new NotFoundException;
    return books;
  }
}
