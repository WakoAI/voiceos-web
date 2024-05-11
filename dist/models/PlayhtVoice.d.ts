import { Model4 } from '../models/Model4';
export declare class PlayhtVoice {
    'provider'?: PlayhtVoiceProviderEnum;
    'model'?: Model4;
    'speed'?: number;
    'temperature'?: number;
    'textGuidance'?: number;
    'styleGuidance'?: number;
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
export declare enum PlayhtVoiceProviderEnum {
    Playht = "playht"
}
