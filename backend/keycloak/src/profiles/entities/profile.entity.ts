import { ApiProperty } from "@nestjs/swagger";

export class Profile {
  @ApiProperty({
    example: '1',
    description: 'プロフィールID',
  })
  id: number;

  @ApiProperty({
    example: '26b0a969-028d-4955-8c14-5e3056b6c099',
    description: 'UUID',
  })
  uuid: string;

  @ApiProperty({
    example: 'John Doe',
    description: '表示名',
  })
  userName: string;
}
