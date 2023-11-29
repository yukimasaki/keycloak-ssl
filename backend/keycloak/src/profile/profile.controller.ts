import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Public } from 'nest-keycloak-connect';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) { }

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.create(createProfileDto);
  }

  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @Get(':uuid')
  @Public()
  findOne(@Param('uuid') uuid: string) {
    return this.profileService.findOne(uuid);
  }

  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.update(uuid, updateProfileDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.profileService.remove(uuid);
  }
}
