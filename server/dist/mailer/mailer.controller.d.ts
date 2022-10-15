import { MailerService } from './mailer.service';
export declare class MailerController {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendEmail(email: any): Promise<[import("@sendgrid/mail").ClientResponse, {}]>;
}
