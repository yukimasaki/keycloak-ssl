import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UtilityService } from 'src/common/services/utility.service';

@Module({
  controllers: [ProfilesController],
  providers: [
    ProfilesService,
    PrismaService,
    JwtService,
    UtilityService,
  ],
})
export class ProfilesModule { }
