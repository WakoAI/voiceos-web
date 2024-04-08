import { TwilioTelephony } from '../models/TwilioTelephony';
export declare class PhoneNumber {
    'uri': string;
    'inboundAgentUri'?: string;
    'phoneNumber': string;
    'accountId': string;
    'createdAt': Date;
    'updatedAt': Date;
    'telephony': TwilioTelephony;
    'stripeSubscriptionId'?: string;
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
