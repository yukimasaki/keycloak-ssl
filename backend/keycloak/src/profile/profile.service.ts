import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }

  create(createProfileDto: CreateProfileDto) {
    return 'This action adds a new profile';
  }

  findAll() {
    return `This action returns all profile`;
  }

  async findOne(uuid: string) {
    return await this.prisma.profile.findUnique({
      where: {
        uuid,
      }
    });
  }

  update(uuid: string, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${uuid} profile`;
  }

  remove(uuid: string) {
    return `This action removes a #${uuid} profile`;
  }
}
