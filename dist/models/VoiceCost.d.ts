import { WakoApiModelsSynthesizerProvider } from '../models/WakoApiModelsSynthesizerProvider';
export declare class VoiceCost {
    'provider': WakoApiModelsSynthesizerProvider;
    'cost': number;
    'characters': number;
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
