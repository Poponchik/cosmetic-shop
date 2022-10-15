import { SendgridService } from '../sendgrid/sendgrid.service';
export declare class MailController {
    private readonly sendgridService;
    constructor(sendgridService: SendgridService);
    sendEmail(email: any): Promise<[import("@sendgrid/mail").ClientResponse, {}]>;
}
