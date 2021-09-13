import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    onWork(body: string): Promise<string>;
    offWork(body: string): Promise<string>;
    worktime(): Promise<string>;
}
