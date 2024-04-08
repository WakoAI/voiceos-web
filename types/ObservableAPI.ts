import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { Agent } from '../models/Agent';
import { AgentConfiguration } from '../models/AgentConfiguration';
import { AgentCost } from '../models/AgentCost';
import { AgentLanguage } from '../models/AgentLanguage';
import { AgentPagination } from '../models/AgentPagination';
import { AgentProvider } from '../models/AgentProvider';
import { AgentResponse } from '../models/AgentResponse';
import { AzureLanguages } from '../models/AzureLanguages';
import { AzureModel } from '../models/AzureModel';
import { AzureSynthesizer } from '../models/AzureSynthesizer';
import { AzureTranscriber } from '../models/AzureTranscriber';
import { BuyPhoneNumber } from '../models/BuyPhoneNumber';
import { CallCost } from '../models/CallCost';
import { CallRecording } from '../models/CallRecording';
import { CallResponse } from '../models/CallResponse';
import { CallStatus } from '../models/CallStatus';
import { CallType } from '../models/CallType';
import { CallsPagination } from '../models/CallsPagination';
import { ChatGPT } from '../models/ChatGPT';
import { CreateCall } from '../models/CreateCall';
import { CreateCallResponse } from '../models/CreateCallResponse';
import { Currency } from '../models/Currency';
import { DeepgramLanguages } from '../models/DeepgramLanguages';
import { DeepgramModel } from '../models/DeepgramModel';
import { DeepgramTranscriber } from '../models/DeepgramTranscriber';
import { ElevenLabsModel } from '../models/ElevenLabsModel';
import { ElevenLabsSynthesizer } from '../models/ElevenLabsSynthesizer';
import { EndedReasons } from '../models/EndedReasons';
import { Event } from '../models/Event';
import { EventName } from '../models/EventName';
import { EventVariableName } from '../models/EventVariableName';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { LanguageModelCost } from '../models/LanguageModelCost';
import { Message } from '../models/Message';
import { MessageRole } from '../models/MessageRole';
import { MethodEnum } from '../models/MethodEnum';
import { OpenAI } from '../models/OpenAI';
import { OpenAIFunction } from '../models/OpenAIFunction';
import { OpenAIFunctionParameter } from '../models/OpenAIFunctionParameter';
import { OpenAIFunctionType } from '../models/OpenAIFunctionType';
import { PhoneNumber } from '../models/PhoneNumber';
import { PhoneNumberPagination } from '../models/PhoneNumberPagination';
import { PhoneNumberResponse } from '../models/PhoneNumberResponse';
import { PhoneNumberToBuy } from '../models/PhoneNumberToBuy';
import { RimeSynthesizer } from '../models/RimeSynthesizer';
import { SynthesizerCost } from '../models/SynthesizerCost';
import { TelephonyCost } from '../models/TelephonyCost';
import { Transcriber } from '../models/Transcriber';
import { Transcriber1 } from '../models/Transcriber1';
import { TranscriberCost } from '../models/TranscriberCost';
import { TwilioTelephony } from '../models/TwilioTelephony';
import { UpdateAgent } from '../models/UpdateAgent';
import { UpdatePhoneNumber } from '../models/UpdatePhoneNumber';
import { ValidationError } from '../models/ValidationError';
import { ValidationErrorLocInner } from '../models/ValidationErrorLocInner';
import { Voice } from '../models/Voice';
import { Voice1 } from '../models/Voice1';
import { WakoApiModelsLanguageModelProvider } from '../models/WakoApiModelsLanguageModelProvider';
import { WakoApiModelsPhoneNumberProvider } from '../models/WakoApiModelsPhoneNumberProvider';
import { WakoApiModelsSynthesizerProvider } from '../models/WakoApiModelsSynthesizerProvider';
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
     * @param agentId 
     */
    public deleteAgentWithHttpInfo(agentId: string, _options?: Configuration): Observable<HttpInfo<AgentResponse>> {
        const requestContextPromise = this.requestFactory.deleteAgent(agentId, _options);

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
     * @param agentId 
     */
    public deleteAgent(agentId: string, _options?: Configuration): Observable<AgentResponse> {
        return this.deleteAgentWithHttpInfo(agentId, _options).pipe(map((apiResponse: HttpInfo<AgentResponse>) => apiResponse.data));
    }

    /**
     * Get Agent
     * @param agentId 
     */
    public getAgentWithHttpInfo(agentId: string, _options?: Configuration): Observable<HttpInfo<AgentResponse>> {
        const requestContextPromise = this.requestFactory.getAgent(agentId, _options);

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
     * @param agentId 
     */
    public getAgent(agentId: string, _options?: Configuration): Observable<AgentResponse> {
        return this.getAgentWithHttpInfo(agentId, _options).pipe(map((apiResponse: HttpInfo<AgentResponse>) => apiResponse.data));
    }

    /**
     * List Agents
     * @param createdAfter 
     * @param createdBefore 
     * @param index 
     * @param size 
     */
    public listAgentsWithHttpInfo(createdAfter?: Date, createdBefore?: Date, index?: number, size?: number, _options?: Configuration): Observable<HttpInfo<AgentPagination>> {
        const requestContextPromise = this.requestFactory.listAgents(createdAfter, createdBefore, index, size, _options);

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
     * @param createdAfter 
     * @param createdBefore 
     * @param index 
     * @param size 
     */
    public listAgents(createdAfter?: Date, createdBefore?: Date, index?: number, size?: number, _options?: Configuration): Observable<AgentPagination> {
        return this.listAgentsWithHttpInfo(createdAfter, createdBefore, index, size, _options).pipe(map((apiResponse: HttpInfo<AgentPagination>) => apiResponse.data));
    }

    /**
     * Update Agent
     * @param agentId 
     * @param updateAgent 
     */
    public updateAgentWithHttpInfo(agentId: string, updateAgent: UpdateAgent, _options?: Configuration): Observable<HttpInfo<AgentResponse>> {
        const requestContextPromise = this.requestFactory.updateAgent(agentId, updateAgent, _options);

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
     * @param agentId 
     * @param updateAgent 
     */
    public updateAgent(agentId: string, updateAgent: UpdateAgent, _options?: Configuration): Observable<AgentResponse> {
        return this.updateAgentWithHttpInfo(agentId, updateAgent, _options).pipe(map((apiResponse: HttpInfo<AgentResponse>) => apiResponse.data));
    }

}

import { CallsApiRequestFactory, CallsApiResponseProcessor} from "../apis/CallsApi";
export class ObservableCallsApi {
    private requestFactory: CallsApiRequestFactory;
    private responseProcessor: CallsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CallsApiRequestFactory,
        responseProcessor?: CallsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CallsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CallsApiResponseProcessor();
    }

    /**
     * Create Call
     * @param createCall 
     */
    public createCallWithHttpInfo(createCall: CreateCall, _options?: Configuration): Observable<HttpInfo<CreateCallResponse>> {
        const requestContextPromise = this.requestFactory.createCall(createCall, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCallWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Call
     * @param createCall 
     */
    public createCall(createCall: CreateCall, _options?: Configuration): Observable<CreateCallResponse> {
        return this.createCallWithHttpInfo(createCall, _options).pipe(map((apiResponse: HttpInfo<CreateCallResponse>) => apiResponse.data));
    }

    /**
     * Get Call
     * @param callId 
     */
    public getCallWithHttpInfo(callId: string, _options?: Configuration): Observable<HttpInfo<CallResponse>> {
        const requestContextPromise = this.requestFactory.getCall(callId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCallWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Call
     * @param callId 
     */
    public getCall(callId: string, _options?: Configuration): Observable<CallResponse> {
        return this.getCallWithHttpInfo(callId, _options).pipe(map((apiResponse: HttpInfo<CallResponse>) => apiResponse.data));
    }

    /**
     * Get Call Recording
     * @param callId 
     */
    public getRecordingWithHttpInfo(callId: string, _options?: Configuration): Observable<HttpInfo<CallRecording>> {
        const requestContextPromise = this.requestFactory.getRecording(callId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRecordingWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Call Recording
     * @param callId 
     */
    public getRecording(callId: string, _options?: Configuration): Observable<CallRecording> {
        return this.getRecordingWithHttpInfo(callId, _options).pipe(map((apiResponse: HttpInfo<CallRecording>) => apiResponse.data));
    }

    /**
     * List Calls
     * @param status 
     * @param createdBefore 
     * @param createdAfter 
     * @param index 
     * @param size 
     */
    public listCallsWithHttpInfo(status?: CallStatus, createdBefore?: Date, createdAfter?: Date, index?: number, size?: number, _options?: Configuration): Observable<HttpInfo<CallsPagination>> {
        const requestContextPromise = this.requestFactory.listCalls(status, createdBefore, createdAfter, index, size, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCallsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Calls
     * @param status 
     * @param createdBefore 
     * @param createdAfter 
     * @param index 
     * @param size 
     */
    public listCalls(status?: CallStatus, createdBefore?: Date, createdAfter?: Date, index?: number, size?: number, _options?: Configuration): Observable<CallsPagination> {
        return this.listCallsWithHttpInfo(status, createdBefore, createdAfter, index, size, _options).pipe(map((apiResponse: HttpInfo<CallsPagination>) => apiResponse.data));
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
     * Buy Phone Number
     * @param buyPhoneNumber 
     */
    public buyPhoneNumberPhoneNumbersBuyPostWithHttpInfo(buyPhoneNumber: BuyPhoneNumber, _options?: Configuration): Observable<HttpInfo<PhoneNumberResponse>> {
        const requestContextPromise = this.requestFactory.buyPhoneNumberPhoneNumbersBuyPost(buyPhoneNumber, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.buyPhoneNumberPhoneNumbersBuyPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Buy Phone Number
     * @param buyPhoneNumber 
     */
    public buyPhoneNumberPhoneNumbersBuyPost(buyPhoneNumber: BuyPhoneNumber, _options?: Configuration): Observable<PhoneNumberResponse> {
        return this.buyPhoneNumberPhoneNumbersBuyPostWithHttpInfo(buyPhoneNumber, _options).pipe(map((apiResponse: HttpInfo<PhoneNumberResponse>) => apiResponse.data));
    }

    /**
     * Delete Phone Number
     * @param phoneNumber 
     * @param releasePhoneNumber 
     */
    public deletePhoneNumberPhoneNumbersPhoneNumberDeleteWithHttpInfo(phoneNumber: string, releasePhoneNumber?: boolean, _options?: Configuration): Observable<HttpInfo<PhoneNumber>> {
        const requestContextPromise = this.requestFactory.deletePhoneNumberPhoneNumbersPhoneNumberDelete(phoneNumber, releasePhoneNumber, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePhoneNumberPhoneNumbersPhoneNumberDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Phone Number
     * @param phoneNumber 
     * @param releasePhoneNumber 
     */
    public deletePhoneNumberPhoneNumbersPhoneNumberDelete(phoneNumber: string, releasePhoneNumber?: boolean, _options?: Configuration): Observable<PhoneNumber> {
        return this.deletePhoneNumberPhoneNumbersPhoneNumberDeleteWithHttpInfo(phoneNumber, releasePhoneNumber, _options).pipe(map((apiResponse: HttpInfo<PhoneNumber>) => apiResponse.data));
    }

    /**
     * Get Phone Number
     * @param phoneNumber 
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
     * @param phoneNumber 
     */
    public getPhoneNumber(phoneNumber: string, _options?: Configuration): Observable<PhoneNumberResponse> {
        return this.getPhoneNumberWithHttpInfo(phoneNumber, _options).pipe(map((apiResponse: HttpInfo<PhoneNumberResponse>) => apiResponse.data));
    }

    /**
     * List Available Phone Numbers
     * @param areaCode 
     * @param contains 
     * @param limit 
     */
    public listAvailablePhoneNumbersWithHttpInfo(areaCode?: string, contains?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<Array<PhoneNumberToBuy>>> {
        const requestContextPromise = this.requestFactory.listAvailablePhoneNumbers(areaCode, contains, limit, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAvailablePhoneNumbersWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Available Phone Numbers
     * @param areaCode 
     * @param contains 
     * @param limit 
     */
    public listAvailablePhoneNumbers(areaCode?: string, contains?: string, limit?: number, _options?: Configuration): Observable<Array<PhoneNumberToBuy>> {
        return this.listAvailablePhoneNumbersWithHttpInfo(areaCode, contains, limit, _options).pipe(map((apiResponse: HttpInfo<Array<PhoneNumberToBuy>>) => apiResponse.data));
    }

    /**
     * List Phone Numbers
     * @param createdAfter 
     * @param createdBefore 
     * @param index 
     * @param size 
     */
    public listPhoneNumbersWithHttpInfo(createdAfter?: Date, createdBefore?: Date, index?: number, size?: number, _options?: Configuration): Observable<HttpInfo<PhoneNumberPagination>> {
        const requestContextPromise = this.requestFactory.listPhoneNumbers(createdAfter, createdBefore, index, size, _options);

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
     * @param createdAfter 
     * @param createdBefore 
     * @param index 
     * @param size 
     */
    public listPhoneNumbers(createdAfter?: Date, createdBefore?: Date, index?: number, size?: number, _options?: Configuration): Observable<PhoneNumberPagination> {
        return this.listPhoneNumbersWithHttpInfo(createdAfter, createdBefore, index, size, _options).pipe(map((apiResponse: HttpInfo<PhoneNumberPagination>) => apiResponse.data));
    }

    /**
     * Update Phone Number
     * @param phoneNumber 
     * @param updatePhoneNumber 
     */
    public updatePhoneNumberPhoneNumbersPhoneNumberPatchWithHttpInfo(phoneNumber: string, updatePhoneNumber: UpdatePhoneNumber, _options?: Configuration): Observable<HttpInfo<PhoneNumberResponse>> {
        const requestContextPromise = this.requestFactory.updatePhoneNumberPhoneNumbersPhoneNumberPatch(phoneNumber, updatePhoneNumber, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePhoneNumberPhoneNumbersPhoneNumberPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Phone Number
     * @param phoneNumber 
     * @param updatePhoneNumber 
     */
    public updatePhoneNumberPhoneNumbersPhoneNumberPatch(phoneNumber: string, updatePhoneNumber: UpdatePhoneNumber, _options?: Configuration): Observable<PhoneNumberResponse> {
        return this.updatePhoneNumberPhoneNumbersPhoneNumberPatchWithHttpInfo(phoneNumber, updatePhoneNumber, _options).pipe(map((apiResponse: HttpInfo<PhoneNumberResponse>) => apiResponse.data));
    }

}
