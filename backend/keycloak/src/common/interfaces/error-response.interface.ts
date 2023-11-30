import { ApiProperty } from "@nestjs/swagger";

export class ErrorResponse {
  @ApiProperty({
    example: 'Not Found',
    description: 'HTTPステータスコードの説明',
  })
  message: string;

  @ApiProperty({
    example: '404',
    description: 'HTTPステータスコード',
  })
  statusCode: number;
}
