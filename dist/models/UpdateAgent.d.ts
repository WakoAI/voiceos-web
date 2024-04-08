import { AgentLanguage } from '../models/AgentLanguage';
import { OpenAI } from '../models/OpenAI';
import { Transcriber1 } from '../models/Transcriber1';
import { Voice1 } from '../models/Voice1';
import { Webhook } from '../models/Webhook';
export declare class UpdateAgent {
    'name'?: string;
    'initialMessage'?: string;
    'prompt'?: string;
    'language'?: AgentLanguage;
    'languageModel'?: OpenAI;
    'voice'?: Voice1;
    'transcriber'?: Transcriber1;
    'maxDurationTime'?: number;
    'webhooks'?: Array<Webhook>;
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
