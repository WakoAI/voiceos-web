import { OpenAI } from '../models/OpenAI';
import { Transcriber1 } from '../models/Transcriber1';
import { Voice1 } from '../models/Voice1';
import { Webhook } from '../models/Webhook';
export declare class UpdateAgent {
    'initialMessage'?: string;
    'prompt'?: string;
    'voice'?: Voice1;
    'languageModel'?: OpenAI;
    'transcriber'?: Transcriber1;
    'maxDurationSeconds'?: number;
    'webhooks'?: Array<Webhook>;
    'metadata'?: {
        [key: string]: string;
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
