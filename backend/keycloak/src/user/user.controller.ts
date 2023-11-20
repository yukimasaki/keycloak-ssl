import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Roles, Unprotected } from 'nest-keycloak-connect';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  private HELLO: string = 'Hello NestJS';

  @Get('/public')
  @Unprotected()
  getPublic(): string {
    return `${this.HELLO} from public`;
  }

  @Get('/user')
  @Roles({
    roles: [
      'user',
    ],
  })
  getUser(): string {
    return `${this.HELLO} from user`;
  }

  @Get('/admin')
  @Roles({
    roles: [
      'admin',
    ],
  })
  getAdmin(): string {
    return `${this.HELLO} from admin`;
  }

  @Get('/all')
  getAll(): string {
    return `${this.HELLO} from all`;
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
