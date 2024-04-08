export declare class BuyPhoneNumber {
    'provider'?: BuyPhoneNumberProviderEnum;
    'phoneNumber': string;
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
export declare enum BuyPhoneNumberProviderEnum {
    Twilio = "twilio"
}
