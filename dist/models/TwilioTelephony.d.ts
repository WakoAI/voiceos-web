export declare class TwilioTelephony {
    'provider'?: TwilioTelephonyProviderEnum;
    'phoneNumberSid': string;
    'accountSid'?: string;
    'authToken'?: string;
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
export declare enum TwilioTelephonyProviderEnum {
    Twilio = "twilio"
}
