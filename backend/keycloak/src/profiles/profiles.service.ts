import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class ProfilesService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }

  async create(
    createProfileDto: CreateProfileDto,
  ) {
    const profile: Profile = await this.prisma.profile.create({
      data: createProfileDto,
    });
    return 'This action adds a new profile';
  }

  findAll() {
    return `This action returns all profiles`;
  }

  async findOne(uuid: string) {
    const profile: Profile = await this.prisma.profile.findUnique({
      where: {
        uuid,
      }
    });

    if (!profile) throw new NotFoundException;

    return profile;
  }

  update(uuid: string, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${uuid} profile`;
  }

  remove(uuid: string) {
    return `This action removes a #${uuid} profile`;
  }
}
