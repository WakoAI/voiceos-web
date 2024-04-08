import { Event } from '../models/Event';
import { MethodEnum } from '../models/MethodEnum';
export declare class Webhook {
    'event': Event;
    'url': string;
    'method': MethodEnum;
    'headers'?: {
        [key: string]: string;
    };
    'filter'?: {
        [key: string]: number;
    };
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
