import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { ApiOperation, ApiProduces, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SummarizeApiResponse } from 'src/common/decorators/summarize-api-response.decorator';
import { Public, Roles } from 'nest-keycloak-connect';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';

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
  findAllFromPublic() {
    return this.booksService.findAll();
  }

  @Get('public/page')
  @Public()
  findByPage(
  ) {
    return this.booksService.findByPage();
  }

  @Get('/all')
  @Roles({
    roles: [
      'admin',
      'user',
    ]
  })
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '単体取得API (認証済みユーザー)' })
  @ApiResponse({
    status: 200,
    description: '全ての書籍情報を返却する',
    type: Book,
  })
  findAllFromAllUser() {
    return this.booksService.findAll();
  }

  @Get('/admin')
  @Roles({
    roles: [
      'admin',
    ]
  })
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '単体取得API (adminロール)' })
  @ApiResponse({
    status: 200,
    description: '全ての書籍情報を返却する',
    type: Book,
  })
  findAllFromAdmin() {
    return this.booksService.findAll();
  }

  @Get('/user')
  @Roles({
    roles: [
      'user',
    ]
  })
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '単体取得API (userロール)' })
  @ApiResponse({
    status: 200,
    description: '全ての書籍情報を返却する',
    type: Book,
  })
  findAllFromUser() {
    return this.booksService.findAll();
  }

  @Post()
  @Public()
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '単体作成API (パブリックアクセス)' })
  @ApiResponse({
    status: 201,
    description: '作成した書籍情報を返却する',
    type: Book,
  })
  create(
    @Body() createBookDto: CreateBookDto,
  ) {
    return this.booksService.create(createBookDto);
  }
}
