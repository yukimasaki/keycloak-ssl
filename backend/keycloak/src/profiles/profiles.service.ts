import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AccessToken } from 'src/common/interfaces/access-token.interface';

@Injectable()
export class ProfilesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) { }

  _decodeJwt(
    bearerToken: string,
  ): AccessToken {
    const accessToken: string = this.jwtService.decode(bearerToken);
    return JSON.parse(JSON.stringify(accessToken));
  }

  async findMyProfile(
    bearerToken: string,
  ) {
    const accessToken: AccessToken = this._decodeJwt(bearerToken);
    if (!accessToken) throw new BadRequestException;

    const keycloakUserId: string = accessToken['sub'];
    console.log(keycloakUserId);

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
