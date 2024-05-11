import { AgentCost } from '../models/AgentCost';
import { LanguageModelCost } from '../models/LanguageModelCost';
import { TelephonyCost } from '../models/TelephonyCost';
import { TranscriberCost } from '../models/TranscriberCost';
import { VoiceCost } from '../models/VoiceCost';
export declare class ConversationCost {
    'total': number;
    'voice': VoiceCost;
    'transcriber': TranscriberCost;
    'languageModel': LanguageModelCost;
    'telephony'?: TelephonyCost;
    'agent': AgentCost;
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
