import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Public } from 'nest-keycloak-connect';
import { ApiProduces, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Profile } from './entities/profile.entity';
import { SummarizeApiResponse } from 'src/common/decorators/summarize-api-response.decorator';

@Controller('profiles')
@ApiTags('/profiles')
@SummarizeApiResponse()
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) { }

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profilesService.create(createProfileDto);
  }

  @Get()
  findAll() {
    return this.profilesService.findAll();
  }

  @Get(':uuid')
  @Public()
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '単体取得API' })
  @ApiParam({
    name: 'uuid',
    type: String,
    example: '26b0a969-028d-4955-8c14-5e3056b6c099',
  })
  @ApiResponse({
    status: 200,
    description: '指定されたUUIDのプロフィール情報を返却',
    type: Profile,
  })
  findOne(
    @Param('uuid') uuid: string,
  ) {
    return this.profilesService.findOne(uuid);
  }

  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profilesService.update(uuid, updateProfileDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.profilesService.remove(uuid);
  }
}
