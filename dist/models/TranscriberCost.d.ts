import { WakoApiModelsTranscriberProvider } from '../models/WakoApiModelsTranscriberProvider';
export declare class TranscriberCost {
    'provider': WakoApiModelsTranscriberProvider;
    'cost': number;
    'seconds': number;
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
