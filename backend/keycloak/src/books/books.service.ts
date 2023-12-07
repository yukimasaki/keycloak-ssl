import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }
  async findAll() {
    return await this.prisma.book.findMany();
  }
}
