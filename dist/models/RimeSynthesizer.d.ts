export declare class RimeSynthesizer {
    'provider'?: RimeSynthesizerProviderEnum;
    'speaker'?: string;
    'reduceLantency'?: boolean;
    'speedAlpha'?: number;
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
export declare enum RimeSynthesizerProviderEnum {
    Rime = "rime"
}
