import { AgentLanguage } from '../models/AgentLanguage';
import { OpenAI } from '../models/OpenAI';
import { Transcriber } from '../models/Transcriber';
import { Voice } from '../models/Voice';
import { Webhook } from '../models/Webhook';
export declare class AgentConfiguration {
    'name': string;
    'initialMessage': string;
    'prompt': string;
    'language'?: AgentLanguage;
    'languageModel'?: OpenAI;
    'voice'?: Voice;
    'transcriber'?: Transcriber;
    'maxCallDuration'?: number;
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
