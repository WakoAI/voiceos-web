import { MethodEnum } from '../models/MethodEnum';
import { PhoneNumberEvents } from '../models/PhoneNumberEvents';
export declare class PhoneNumberWebhook {
    'events': Array<PhoneNumberEvents>;
    'url': string;
    'method': MethodEnum;
    'headers'?: {
        [key: string]: string;
    };
    'filter'?: string;
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
