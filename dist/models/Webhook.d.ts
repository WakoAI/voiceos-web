import { EventName } from '../models/EventName';
import { MethodEnum } from '../models/MethodEnum';
export declare class Webhook {
    'events': Array<EventName>;
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
