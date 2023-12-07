import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';
import { ApiOperation, ApiProduces, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SummarizeApiResponse } from 'src/common/decorators/summarize-api-response.decorator';
import { Public } from 'nest-keycloak-connect';
import { Book } from './entities/book.entity';

@Controller('books')
@ApiTags('/books')
@SummarizeApiResponse()
export class BooksController {
  constructor(private readonly booksService: BooksService) { }

  @Get('/public')
  @Public()
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '単体取得API (パブリックアクセス)' })
  @ApiResponse({
    status: 200,
    description: '全ての書籍情報を返却する',
    type: Book,
  })
  findAll() {
    return this.booksService.findAll();
  }
}
