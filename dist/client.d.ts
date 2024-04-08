import { PromiseAgentsApi, PromiseCallsApi, PromisePhoneNumbersApi } from "./types/PromiseAPI";
import * as models from "./models/all";
export default class VoiceOS {
    private config;
    agents: PromiseAgentsApi;
    calls: PromiseCallsApi;
    phoneNumbers: PromisePhoneNumbersApi;
    models: typeof models;
    constructor(api_key?: string);
}
