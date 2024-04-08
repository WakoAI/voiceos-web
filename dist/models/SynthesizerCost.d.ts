import { WakoApiModelsSynthesizerProvider } from '../models/WakoApiModelsSynthesizerProvider';
export declare class SynthesizerCost {
    'provider': WakoApiModelsSynthesizerProvider;
    'cost': number;
    'characters': number;
    'external': boolean;
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
