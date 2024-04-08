import { AgentCost } from '../models/AgentCost';
import { Currency } from '../models/Currency';
import { LanguageModelCost } from '../models/LanguageModelCost';
import { SynthesizerCost } from '../models/SynthesizerCost';
import { TelephonyCost } from '../models/TelephonyCost';
import { TranscriberCost } from '../models/TranscriberCost';
export declare class CallCost {
    'total': number;
    'synthesizer': SynthesizerCost;
    'transcriber': TranscriberCost;
    'languageModel': LanguageModelCost;
    'telephony'?: TelephonyCost;
    'agent': AgentCost;
    'currency'?: Currency;
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
