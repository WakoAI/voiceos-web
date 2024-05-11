import { Configuration, createConfiguration } from "./configuration";
import { PromiseAgentsApi, PromiseConversationsApi, PromisePhoneNumbersApi } from "./types/PromiseAPI";
import { servers } from './servers';
import { AuthMethodsConfiguration, TokenProvider } from "./auth/auth";

// import all models 
import * as models from "./models/all";

export default class VoiceOS {
    private config: Configuration;
    public agents: PromiseAgentsApi;
    public conversations: PromiseConversationsApi;
    public phoneNumbers: PromisePhoneNumbersApi;
    public models: typeof models;
  
    constructor(api_key?: string) {
        const authConfig: AuthMethodsConfiguration = {
            Bearer: {
                tokenProvider: {
                    getToken: async () => {
                        return api_key || "";
                    }
                } as TokenProvider
            }
        };
        
      this.config = createConfiguration(
        {
            baseServer: servers[0], 
            authMethods: authConfig,
        }
        );

        this.agents = new PromiseAgentsApi(this.config);
        this.conversations = new PromiseConversationsApi(this.config);
        this.phoneNumbers = new PromisePhoneNumbersApi(this.config);
        this.models = models;
    }
  }