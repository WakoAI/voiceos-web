export declare class PhoneNumberToBuy {
    'provider'?: PhoneNumberToBuyProviderEnum;
    'phoneNumber': string;
    'postalCode'?: string;
    'isoCountry'?: string;
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
export declare enum PhoneNumberToBuyProviderEnum {
    Twilio = "twilio"
}
