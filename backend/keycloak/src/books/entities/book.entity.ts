import { ApiProperty } from "@nestjs/swagger";

export class Book {
  @ApiProperty({
    example: '1',
    description: '書籍ID',
  })
  id: number;

  @ApiProperty({
    example: '銀河鉄道の夜',
    description: '作品名',
  })
  title: string;

  @ApiProperty({
    example: '宮沢 賢治',
    description: '著者',
  })
  author: string;
}
