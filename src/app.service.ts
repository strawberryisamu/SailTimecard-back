import { Prisma, User, Work } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  
  async isWorking (isleft : boolean){

  }

  async onWork(data : Prisma.WorkCreateInput): Promise<Work> {
    return this.prisma.work.create({data})
  }
  
  async offWork(name:Prisma.WorkCreateInput): Promise<Work>{
    return this.prisma.work.create({
      data: name,
    })
  }
  culc(): string {
    return ''
  }
}


