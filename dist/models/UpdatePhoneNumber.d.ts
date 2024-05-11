import { PhoneNumberWebhook } from '../models/PhoneNumberWebhook';
export declare class UpdatePhoneNumber {
    'inboundAgentId'?: string;
    'webhooks'?: Array<PhoneNumberWebhook>;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
