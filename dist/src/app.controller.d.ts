import { AppService } from './app.service';
import { CreateUserDto } from 'dto/user.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    onWork(body: CreateUserDto): Promise<string>;
    offWork(name: CreateUserDto): Promise<import(".prisma/client").Work>;
    worktime(): Promise<string>;
}
