import { Prisma, Work } from '.prisma/client';
import { PrismaService } from './prisma.service';
export declare class AppService {
    private prisma;
    constructor(prisma: PrismaService);
    isWorking(isleft: boolean): Promise<void>;
    onWork(data: Prisma.WorkCreateInput): Promise<Work>;
    offWork(name: Prisma.WorkCreateInput): Promise<Work>;
    culc(): string;
}
