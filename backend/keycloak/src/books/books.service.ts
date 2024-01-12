import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }

  async findAll() {
    const books: Book[] = await this.prisma.client.book.findMany();
    if (books.length === 0) throw new NotFoundException;
    return books;
  }

  async findByPage({
    page,
    perPage,
  }: {
    page: number,
    perPage: number,
  }) {
    const books = await this.prisma.client.book.paginate({
      page,
      perPage,
    });

    return books;
  }

  async create(
    createBookDto: CreateBookDto,
  ) {
    const book: Book = await this.prisma.client.book.create({
      data: createBookDto,
    });
    if (!book) throw new BadRequestException;
    return book;
  }
}
