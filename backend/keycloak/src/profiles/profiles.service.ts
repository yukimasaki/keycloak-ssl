import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { AccessToken } from 'src/common/interfaces/access-token.interface';
import { UtilityService } from 'src/common/services/utility.service';

@Injectable()
export class ProfilesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly utilityService: UtilityService,
  ) { }

  async findMyProfile(
    bearerToken: string,
  ) {
    const accessToken: AccessToken = this.utilityService.decodeJwt(bearerToken);
    if (!accessToken) throw new BadRequestException;

    const keycloakUserId: string = accessToken['sub'];

    const profile: Profile = await this.prisma.profile.findUnique({
      where: {
        uuid: keycloakUserId,
      },
    });

    if (!profile) throw new NotFoundException;

    return profile;
  }

  async create(
    createProfileDto: CreateProfileDto,
  ) {
    try {
      const profile: Profile = await this.prisma.profile.create({
        data: createProfileDto,
      });
      return profile;
    } catch (error) {
      throw new ConflictException;
    }
  }

  async upsert(
    upsertProfileDto: CreateProfileDto | UpdateProfileDto,
  ) {
    try {
      const profile: Profile = await this.prisma.profile.upsert({
        where: {
          uuid: upsertProfileDto.uuid,
        },
        update: {
          userName: upsertProfileDto.userName,
        },
        create: {
          uuid: upsertProfileDto.uuid,
          userName: upsertProfileDto.userName,
        },
      });
      return profile;
    } catch (error) {
      console.log(error);
    }
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
