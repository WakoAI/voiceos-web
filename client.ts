import { Configuration, createConfiguration } from "./configuration";
import { PromiseAgentsApi, PromiseCallsApi, PromisePhoneNumbersApi } from "./types/PromiseAPI";
import { servers } from './servers';
import { AuthMethodsConfiguration } from "./auth/auth";

// import all models 
import * as models from "./models/all";

export default class VoiceOS {
    private config: Configuration;
    public agents: PromiseAgentsApi;
    public calls: PromiseCallsApi;
    public phoneNumbers: PromisePhoneNumbersApi;
    public models: typeof models;
  
    constructor(api_key?: string) {
        const authConfig: AuthMethodsConfiguration = {
            "APIKeyHeader": api_key
        }

        
      this.config = createConfiguration(
        {
            baseServer: servers[0], 
            authMethods: authConfig,
        }
        );

        this.agents = new PromiseAgentsApi(this.config);
        this.calls = new PromiseCallsApi(this.config);
        this.phoneNumbers = new PromisePhoneNumbersApi(this.config);
        this.models = models;
    }
  }