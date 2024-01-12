import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { paginate } from "src/common/prisma/prisma.extension";

@Injectable()
export class PrismaService implements OnModuleInit {
  public readonly client: ReturnType<typeof this.createExtendedPrisma>;

  constructor() {
    this.client = this.createExtendedPrisma();
  }

  private createExtendedPrisma() {
    return new PrismaClient().$extends(paginate);
  }

  async onModuleInit() {
    await this.client.$connect();
  }
}
