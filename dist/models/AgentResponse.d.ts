import { OpenAI } from '../models/OpenAI';
import { Transcriber } from '../models/Transcriber';
import { Voice } from '../models/Voice';
import { Webhook } from '../models/Webhook';
export declare class AgentResponse {
    'initialMessage'?: string;
    'prompt'?: string;
    'voice'?: Voice;
    'languageModel'?: OpenAI;
    'transcriber'?: Transcriber;
    'maxDurationSeconds'?: number;
    'webhooks'?: Array<Webhook>;
    'metadata'?: {
        [key: string]: string;
    };
    'uri': string;
    'accountId': string;
    'createdAt': Date;
    'updatedAt': Date;
    'id': string;
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
