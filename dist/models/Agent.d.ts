import { AgentLanguage } from '../models/AgentLanguage';
import { OpenAI } from '../models/OpenAI';
import { Transcriber } from '../models/Transcriber';
import { Voice } from '../models/Voice';
export declare class Agent {
    'name': any | null;
    'initialMessage': any | null;
    'prompt': any | null;
    'language'?: AgentLanguage;
    'languageModel'?: OpenAI;
    'voice'?: Voice;
    'transcriber'?: Transcriber;
    'maxCallDuration'?: any | null;
    'webhooks'?: any | null;
    'id': any | null;
    'uri': any | null;
    'accountId': any | null;
    'createdAt': any | null;
    'updatedAt': any | null;
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
