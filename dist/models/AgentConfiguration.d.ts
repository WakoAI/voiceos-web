import { OpenAI } from '../models/OpenAI';
import { Transcriber } from '../models/Transcriber';
import { Voice } from '../models/Voice';
import { Webhook } from '../models/Webhook';
export declare class AgentConfiguration {
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
