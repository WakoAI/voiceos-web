import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AgentConfiguration } from '../models/AgentConfiguration';
import { AgentCost } from '../models/AgentCost';
import { AgentPagination } from '../models/AgentPagination';
import { AgentProvider } from '../models/AgentProvider';
import { AgentResponse } from '../models/AgentResponse';
import { AzureLanguages } from '../models/AzureLanguages';
import { AzureModel } from '../models/AzureModel';
import { AzureTranscriber } from '../models/AzureTranscriber';
import { AzureTranscriberLanguagesInner } from '../models/AzureTranscriberLanguagesInner';
import { AzureVoice } from '../models/AzureVoice';
import { BuyPhoneNumber } from '../models/BuyPhoneNumber';
import { ChatGPT } from '../models/ChatGPT';
import { ConversationCost } from '../models/ConversationCost';
import { ConversationRecording } from '../models/ConversationRecording';
import { ConversationResponse } from '../models/ConversationResponse';
import { ConversationStatus } from '../models/ConversationStatus';
import { ConversationType } from '../models/ConversationType';
import { ConversationsPagination } from '../models/ConversationsPagination';
import { CreateCall } from '../models/CreateCall';
import { DeepgramLanguages } from '../models/DeepgramLanguages';
import { DeepgramTranscriber } from '../models/DeepgramTranscriber';
import { DeepgramVoice } from '../models/DeepgramVoice';
import { ElevenLabsModel } from '../models/ElevenLabsModel';
import { ElevenLabsVoices } from '../models/ElevenLabsVoices';
import { ElevenlabsVoice } from '../models/ElevenlabsVoice';
import { EndedReasons } from '../models/EndedReasons';
import { EventName } from '../models/EventName';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { Language } from '../models/Language';
import { LanguageModelCost } from '../models/LanguageModelCost';
import { Message } from '../models/Message';
import { MessageRole } from '../models/MessageRole';
import { MethodEnum } from '../models/MethodEnum';
import { Model } from '../models/Model';
import { Model1 } from '../models/Model1';
import { Model2 } from '../models/Model2';
import { Model3 } from '../models/Model3';
import { Model4 } from '../models/Model4';
import { OpenAI } from '../models/OpenAI';
import { PhoneNumber } from '../models/PhoneNumber';
import { PhoneNumberEvents } from '../models/PhoneNumberEvents';
import { PhoneNumberPagination } from '../models/PhoneNumberPagination';
import { PhoneNumberResponse } from '../models/PhoneNumberResponse';
import { PhoneNumberToBuy } from '../models/PhoneNumberToBuy';
import { PhoneNumberWebhook } from '../models/PhoneNumberWebhook';
import { PlayHTModel } from '../models/PlayHTModel';
import { PlayhtVoice } from '../models/PlayhtVoice';
import { RimeSpeaker } from '../models/RimeSpeaker';
import { RimeVoice } from '../models/RimeVoice';
import { Speaker } from '../models/Speaker';
import { TelephonyCost } from '../models/TelephonyCost';
import { Transcriber } from '../models/Transcriber';
import { Transcriber1 } from '../models/Transcriber1';
import { TranscriberCost } from '../models/TranscriberCost';
import { TwilioPhoneCall } from '../models/TwilioPhoneCall';
import { TwilioTelephony } from '../models/TwilioTelephony';
import { UpdateAgent } from '../models/UpdateAgent';
import { UpdatePhoneNumber } from '../models/UpdatePhoneNumber';
import { ValidationError } from '../models/ValidationError';
import { ValidationErrorLocInner } from '../models/ValidationErrorLocInner';
import { Voice } from '../models/Voice';
import { Voice1 } from '../models/Voice1';
import { VoiceCost } from '../models/VoiceCost';
import { VoiceId } from '../models/VoiceId';
import { WakoApiModelsLanguageModelProvider } from '../models/WakoApiModelsLanguageModelProvider';
import { WakoApiModelsPhoneNumberProvider } from '../models/WakoApiModelsPhoneNumberProvider';
import { WakoApiModelsSynthesizerDeepgramModel } from '../models/WakoApiModelsSynthesizerDeepgramModel';
import { WakoApiModelsSynthesizerProvider } from '../models/WakoApiModelsSynthesizerProvider';
import { WakoApiModelsTranscriberDeepgramModel } from '../models/WakoApiModelsTranscriberDeepgramModel';
import { WakoApiModelsTranscriberProvider } from '../models/WakoApiModelsTranscriberProvider';
import { Webhook } from '../models/Webhook';

import { AgentsApiRequestFactory, AgentsApiResponseProcessor} from "../apis/AgentsApi";
export class ObservableAgentsApi {
    private requestFactory: AgentsApiRequestFactory;
    private responseProcessor: AgentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AgentsApiRequestFactory,
        responseProcessor?: AgentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AgentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AgentsApiResponseProcessor();
    }

    /**
     * Create Agent
     * @param agentConfiguration 
     */
    public createAgentWithHttpInfo(agentConfiguration: AgentConfiguration, _options?: Configuration): Observable<HttpInfo<AgentResponse>> {
        const requestContextPromise = this.requestFactory.createAgent(agentConfiguration, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAgentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Agent
     * @param agentConfiguration 
     */
    public createAgent(agentConfiguration: AgentConfiguration, _options?: Configuration): Observable<AgentResponse> {
        return this.createAgentWithHttpInfo(agentConfiguration, _options).pipe(map((apiResponse: HttpInfo<AgentResponse>) => apiResponse.data));
    }

    /**
     * Delete Agent
     * @param id The id of the agent.
     */
    public deleteAgentWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<AgentResponse>> {
        const requestContextPromise = this.requestFactory.deleteAgent(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAgentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Agent
     * @param id The id of the agent.
     */
    public deleteAgent(id: string, _options?: Configuration): Observable<AgentResponse> {
        return this.deleteAgentWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<AgentResponse>) => apiResponse.data));
    }

    /**
     * Get Agent
     * @param id The id of the agent.
     */
    public getAgentWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<AgentResponse>> {
        const requestContextPromise = this.requestFactory.getAgent(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAgentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Agent
     * @param id The id of the agent.
     */
    public getAgent(id: string, _options?: Configuration): Observable<AgentResponse> {
        return this.getAgentWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<AgentResponse>) => apiResponse.data));
    }

    /**
     * List Agents
     * @param createdAfter The date after which the agent was created.
     * @param createdBefore The date before which the agent was created.
     * @param index The index of the page to return.
     * @param limit The limit of items to return in the page.
     */
    public listAgentsWithHttpInfo(createdAfter?: Date, createdBefore?: Date, index?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<AgentPagination>> {
        const requestContextPromise = this.requestFactory.listAgents(createdAfter, createdBefore, index, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAgentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Agents
     * @param createdAfter The date after which the agent was created.
     * @param createdBefore The date before which the agent was created.
     * @param index The index of the page to return.
     * @param limit The limit of items to return in the page.
     */
    public listAgents(createdAfter?: Date, createdBefore?: Date, index?: number, limit?: number, _options?: Configuration): Observable<AgentPagination> {
        return this.listAgentsWithHttpInfo(createdAfter, createdBefore, index, limit, _options).pipe(map((apiResponse: HttpInfo<AgentPagination>) => apiResponse.data));
    }

    /**
     * Update Agent
     * @param id The id of the agent.
     * @param updateAgent 
     */
    public updateAgentWithHttpInfo(id: string, updateAgent: UpdateAgent, _options?: Configuration): Observable<HttpInfo<AgentResponse>> {
        const requestContextPromise = this.requestFactory.updateAgent(id, updateAgent, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAgentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Agent
     * @param id The id of the agent.
     * @param updateAgent 
     */
    public updateAgent(id: string, updateAgent: UpdateAgent, _options?: Configuration): Observable<AgentResponse> {
        return this.updateAgentWithHttpInfo(id, updateAgent, _options).pipe(map((apiResponse: HttpInfo<AgentResponse>) => apiResponse.data));
    }

}

import { ConversationsApiRequestFactory, ConversationsApiResponseProcessor} from "../apis/ConversationsApi";
export class ObservableConversationsApi {
    private requestFactory: ConversationsApiRequestFactory;
    private responseProcessor: ConversationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConversationsApiRequestFactory,
        responseProcessor?: ConversationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConversationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConversationsApiResponseProcessor();
    }

    /**
     * Create Phone Call
     * @param createCall 
     */
    public createPhoneCallWithHttpInfo(createCall: CreateCall, _options?: Configuration): Observable<HttpInfo<ConversationResponse>> {
        const requestContextPromise = this.requestFactory.createPhoneCall(createCall, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPhoneCallWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Phone Call
     * @param createCall 
     */
    public createPhoneCall(createCall: CreateCall, _options?: Configuration): Observable<ConversationResponse> {
        return this.createPhoneCallWithHttpInfo(createCall, _options).pipe(map((apiResponse: HttpInfo<ConversationResponse>) => apiResponse.data));
    }

    /**
     * Get Conversation Recording
     * @param id The id of the conversation
     */
    public getAudioRecordingWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<ConversationRecording>> {
        const requestContextPromise = this.requestFactory.getAudioRecording(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAudioRecordingWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Conversation Recording
     * @param id The id of the conversation
     */
    public getAudioRecording(id: string, _options?: Configuration): Observable<ConversationRecording> {
        return this.getAudioRecordingWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ConversationRecording>) => apiResponse.data));
    }

    /**
     * Get Conversation
     * @param id The id of the conversation.
     */
    public getConversationWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<ConversationResponse>> {
        const requestContextPromise = this.requestFactory.getConversation(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConversationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Conversation
     * @param id The id of the conversation.
     */
    public getConversation(id: string, _options?: Configuration): Observable<ConversationResponse> {
        return this.getConversationWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ConversationResponse>) => apiResponse.data));
    }

    /**
     * List Conversations
     * @param status The status of the conversations.
     * @param createdBefore The date before which the conversations were created.
     * @param createdAfter The date after which the conversations were created.
     * @param index The index of the page to return.
     * @param limit The limit of items to return in the page.
     */
    public listConversationsWithHttpInfo(status?: ConversationStatus, createdBefore?: Date, createdAfter?: Date, index?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<ConversationsPagination>> {
        const requestContextPromise = this.requestFactory.listConversations(status, createdBefore, createdAfter, index, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listConversationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Conversations
     * @param status The status of the conversations.
     * @param createdBefore The date before which the conversations were created.
     * @param createdAfter The date after which the conversations were created.
     * @param index The index of the page to return.
     * @param limit The limit of items to return in the page.
     */
    public listConversations(status?: ConversationStatus, createdBefore?: Date, createdAfter?: Date, index?: number, limit?: number, _options?: Configuration): Observable<ConversationsPagination> {
        return this.listConversationsWithHttpInfo(status, createdBefore, createdAfter, index, limit, _options).pipe(map((apiResponse: HttpInfo<ConversationsPagination>) => apiResponse.data));
    }

}

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * Health Check
     */
    public healthCheckGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.healthCheckGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.healthCheckGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Health Check
     */
    public healthCheckGet(_options?: Configuration): Observable<any> {
        return this.healthCheckGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { PhoneNumbersApiRequestFactory, PhoneNumbersApiResponseProcessor} from "../apis/PhoneNumbersApi";
export class ObservablePhoneNumbersApi {
    private requestFactory: PhoneNumbersApiRequestFactory;
    private responseProcessor: PhoneNumbersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PhoneNumbersApiRequestFactory,
        responseProcessor?: PhoneNumbersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PhoneNumbersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PhoneNumbersApiResponseProcessor();
    }

    /**
     * Available Phone Numbers To Buy
     * @param contains The digits that the phone number contains.
     * @param limit The number of available phone numbers to return.
     */
    public availableNumbersToBuyWithHttpInfo(contains?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<Array<PhoneNumberToBuy>>> {
        const requestContextPromise = this.requestFactory.availableNumbersToBuy(contains, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.availableNumbersToBuyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Available Phone Numbers To Buy
     * @param contains The digits that the phone number contains.
     * @param limit The number of available phone numbers to return.
     */
    public availableNumbersToBuy(contains?: string, limit?: number, _options?: Configuration): Observable<Array<PhoneNumberToBuy>> {
        return this.availableNumbersToBuyWithHttpInfo(contains, limit, _options).pipe(map((apiResponse: HttpInfo<Array<PhoneNumberToBuy>>) => apiResponse.data));
    }

    /**
     * Buy Phone Number
     * @param buyPhoneNumber 
     */
    public buyPhoneNumberWithHttpInfo(buyPhoneNumber: BuyPhoneNumber, _options?: Configuration): Observable<HttpInfo<PhoneNumberResponse>> {
        const requestContextPromise = this.requestFactory.buyPhoneNumber(buyPhoneNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.buyPhoneNumberWithHttpInfo(rsp)));
            }));
    }

    /**
     * Buy Phone Number
     * @param buyPhoneNumber 
     */
    public buyPhoneNumber(buyPhoneNumber: BuyPhoneNumber, _options?: Configuration): Observable<PhoneNumberResponse> {
        return this.buyPhoneNumberWithHttpInfo(buyPhoneNumber, _options).pipe(map((apiResponse: HttpInfo<PhoneNumberResponse>) => apiResponse.data));
    }

    /**
     * Delete Phone Number
     * @param phoneNumber The phone number including the country code.
     * @param releasePhoneNumber 
     */
    public deletePhoneNumberWithHttpInfo(phoneNumber: string, releasePhoneNumber?: boolean, _options?: Configuration): Observable<HttpInfo<PhoneNumber>> {
        const requestContextPromise = this.requestFactory.deletePhoneNumber(phoneNumber, releasePhoneNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePhoneNumberWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Phone Number
     * @param phoneNumber The phone number including the country code.
     * @param releasePhoneNumber 
     */
    public deletePhoneNumber(phoneNumber: string, releasePhoneNumber?: boolean, _options?: Configuration): Observable<PhoneNumber> {
        return this.deletePhoneNumberWithHttpInfo(phoneNumber, releasePhoneNumber, _options).pipe(map((apiResponse: HttpInfo<PhoneNumber>) => apiResponse.data));
    }

    /**
     * Get Phone Number
     * @param phoneNumber The phone number including the country code.
     */
    public getPhoneNumberWithHttpInfo(phoneNumber: string, _options?: Configuration): Observable<HttpInfo<PhoneNumberResponse>> {
        const requestContextPromise = this.requestFactory.getPhoneNumber(phoneNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPhoneNumberWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Phone Number
     * @param phoneNumber The phone number including the country code.
     */
    public getPhoneNumber(phoneNumber: string, _options?: Configuration): Observable<PhoneNumberResponse> {
        return this.getPhoneNumberWithHttpInfo(phoneNumber, _options).pipe(map((apiResponse: HttpInfo<PhoneNumberResponse>) => apiResponse.data));
    }

    /**
     * List Phone Numbers
     * @param createdAfter The date the phone number was created after.
     * @param createdBefore The date the phone number was created before.
     * @param index The index of the page to return.
     * @param limit The number of phone numbers to return in the page.
     */
    public listPhoneNumbersWithHttpInfo(createdAfter?: Date, createdBefore?: Date, index?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<PhoneNumberPagination>> {
        const requestContextPromise = this.requestFactory.listPhoneNumbers(createdAfter, createdBefore, index, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPhoneNumbersWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Phone Numbers
     * @param createdAfter The date the phone number was created after.
     * @param createdBefore The date the phone number was created before.
     * @param index The index of the page to return.
     * @param limit The number of phone numbers to return in the page.
     */
    public listPhoneNumbers(createdAfter?: Date, createdBefore?: Date, index?: number, limit?: number, _options?: Configuration): Observable<PhoneNumberPagination> {
        return this.listPhoneNumbersWithHttpInfo(createdAfter, createdBefore, index, limit, _options).pipe(map((apiResponse: HttpInfo<PhoneNumberPagination>) => apiResponse.data));
    }

    /**
     * Update Phone Number
     * @param phoneNumber The phone number including the country code.
     * @param updatePhoneNumber 
     */
    public updatePhoneNumberWithHttpInfo(phoneNumber: string, updatePhoneNumber: UpdatePhoneNumber, _options?: Configuration): Observable<HttpInfo<PhoneNumberResponse>> {
        const requestContextPromise = this.requestFactory.updatePhoneNumber(phoneNumber, updatePhoneNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePhoneNumberWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Phone Number
     * @param phoneNumber The phone number including the country code.
     * @param updatePhoneNumber 
     */
    public updatePhoneNumber(phoneNumber: string, updatePhoneNumber: UpdatePhoneNumber, _options?: Configuration): Observable<PhoneNumberResponse> {
        return this.updatePhoneNumberWithHttpInfo(phoneNumber, updatePhoneNumber, _options).pipe(map((apiResponse: HttpInfo<PhoneNumberResponse>) => apiResponse.data));
    }

}
