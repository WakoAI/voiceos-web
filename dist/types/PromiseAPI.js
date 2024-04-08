"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromisePhoneNumbersApi = exports.PromiseCallsApi = exports.PromiseAgentsApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseAgentsApi = (function () {
    function PromiseAgentsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAgentsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseAgentsApi.prototype.createAgentWithHttpInfo = function (agentConfiguration, _options) {
        var result = this.api.createAgentWithHttpInfo(agentConfiguration, _options);
        return result.toPromise();
    };
    PromiseAgentsApi.prototype.createAgent = function (agentConfiguration, _options) {
        var result = this.api.createAgent(agentConfiguration, _options);
        return result.toPromise();
    };
    PromiseAgentsApi.prototype.deleteAgentWithHttpInfo = function (agentId, _options) {
        var result = this.api.deleteAgentWithHttpInfo(agentId, _options);
        return result.toPromise();
    };
    PromiseAgentsApi.prototype.deleteAgent = function (agentId, _options) {
        var result = this.api.deleteAgent(agentId, _options);
        return result.toPromise();
    };
    PromiseAgentsApi.prototype.getAgentWithHttpInfo = function (agentId, _options) {
        var result = this.api.getAgentWithHttpInfo(agentId, _options);
        return result.toPromise();
    };
    PromiseAgentsApi.prototype.getAgent = function (agentId, _options) {
        var result = this.api.getAgent(agentId, _options);
        return result.toPromise();
    };
    PromiseAgentsApi.prototype.listAgentsWithHttpInfo = function (createdAfter, createdBefore, index, size, _options) {
        var result = this.api.listAgentsWithHttpInfo(createdAfter, createdBefore, index, size, _options);
        return result.toPromise();
    };
    PromiseAgentsApi.prototype.listAgents = function (createdAfter, createdBefore, index, size, _options) {
        var result = this.api.listAgents(createdAfter, createdBefore, index, size, _options);
        return result.toPromise();
    };
    PromiseAgentsApi.prototype.updateAgentWithHttpInfo = function (agentId, updateAgent, _options) {
        var result = this.api.updateAgentWithHttpInfo(agentId, updateAgent, _options);
        return result.toPromise();
    };
    PromiseAgentsApi.prototype.updateAgent = function (agentId, updateAgent, _options) {
        var result = this.api.updateAgent(agentId, updateAgent, _options);
        return result.toPromise();
    };
    return PromiseAgentsApi;
}());
exports.PromiseAgentsApi = PromiseAgentsApi;
var ObservableAPI_2 = require("./ObservableAPI");
var PromiseCallsApi = (function () {
    function PromiseCallsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableCallsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseCallsApi.prototype.createCallWithHttpInfo = function (createCall, _options) {
        var result = this.api.createCallWithHttpInfo(createCall, _options);
        return result.toPromise();
    };
    PromiseCallsApi.prototype.createCall = function (createCall, _options) {
        var result = this.api.createCall(createCall, _options);
        return result.toPromise();
    };
    PromiseCallsApi.prototype.getCallWithHttpInfo = function (callId, _options) {
        var result = this.api.getCallWithHttpInfo(callId, _options);
        return result.toPromise();
    };
    PromiseCallsApi.prototype.getCall = function (callId, _options) {
        var result = this.api.getCall(callId, _options);
        return result.toPromise();
    };
    PromiseCallsApi.prototype.getRecordingWithHttpInfo = function (callId, _options) {
        var result = this.api.getRecordingWithHttpInfo(callId, _options);
        return result.toPromise();
    };
    PromiseCallsApi.prototype.getRecording = function (callId, _options) {
        var result = this.api.getRecording(callId, _options);
        return result.toPromise();
    };
    PromiseCallsApi.prototype.listCallsWithHttpInfo = function (status, createdBefore, createdAfter, index, size, _options) {
        var result = this.api.listCallsWithHttpInfo(status, createdBefore, createdAfter, index, size, _options);
        return result.toPromise();
    };
    PromiseCallsApi.prototype.listCalls = function (status, createdBefore, createdAfter, index, size, _options) {
        var result = this.api.listCalls(status, createdBefore, createdAfter, index, size, _options);
        return result.toPromise();
    };
    return PromiseCallsApi;
}());
exports.PromiseCallsApi = PromiseCallsApi;
var ObservableAPI_3 = require("./ObservableAPI");
var PromisePhoneNumbersApi = (function () {
    function PromisePhoneNumbersApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservablePhoneNumbersApi(configuration, requestFactory, responseProcessor);
    }
    PromisePhoneNumbersApi.prototype.buyPhoneNumberPhoneNumbersBuyPostWithHttpInfo = function (buyPhoneNumber, _options) {
        var result = this.api.buyPhoneNumberPhoneNumbersBuyPostWithHttpInfo(buyPhoneNumber, _options);
        return result.toPromise();
    };
    PromisePhoneNumbersApi.prototype.buyPhoneNumberPhoneNumbersBuyPost = function (buyPhoneNumber, _options) {
        var result = this.api.buyPhoneNumberPhoneNumbersBuyPost(buyPhoneNumber, _options);
        return result.toPromise();
    };
    PromisePhoneNumbersApi.prototype.deletePhoneNumberPhoneNumbersPhoneNumberDeleteWithHttpInfo = function (phoneNumber, releasePhoneNumber, _options) {
        var result = this.api.deletePhoneNumberPhoneNumbersPhoneNumberDeleteWithHttpInfo(phoneNumber, releasePhoneNumber, _options);
        return result.toPromise();
    };
    PromisePhoneNumbersApi.prototype.deletePhoneNumberPhoneNumbersPhoneNumberDelete = function (phoneNumber, releasePhoneNumber, _options) {
        var result = this.api.deletePhoneNumberPhoneNumbersPhoneNumberDelete(phoneNumber, releasePhoneNumber, _options);
        return result.toPromise();
    };
    PromisePhoneNumbersApi.prototype.getPhoneNumberWithHttpInfo = function (phoneNumber, _options) {
        var result = this.api.getPhoneNumberWithHttpInfo(phoneNumber, _options);
        return result.toPromise();
    };
    PromisePhoneNumbersApi.prototype.getPhoneNumber = function (phoneNumber, _options) {
        var result = this.api.getPhoneNumber(phoneNumber, _options);
        return result.toPromise();
    };
    PromisePhoneNumbersApi.prototype.listAvailablePhoneNumbersWithHttpInfo = function (areaCode, contains, limit, _options) {
        var result = this.api.listAvailablePhoneNumbersWithHttpInfo(areaCode, contains, limit, _options);
        return result.toPromise();
    };
    PromisePhoneNumbersApi.prototype.listAvailablePhoneNumbers = function (areaCode, contains, limit, _options) {
        var result = this.api.listAvailablePhoneNumbers(areaCode, contains, limit, _options);
        return result.toPromise();
    };
    PromisePhoneNumbersApi.prototype.listPhoneNumbersWithHttpInfo = function (createdAfter, createdBefore, index, size, _options) {
        var result = this.api.listPhoneNumbersWithHttpInfo(createdAfter, createdBefore, index, size, _options);
        return result.toPromise();
    };
    PromisePhoneNumbersApi.prototype.listPhoneNumbers = function (createdAfter, createdBefore, index, size, _options) {
        var result = this.api.listPhoneNumbers(createdAfter, createdBefore, index, size, _options);
        return result.toPromise();
    };
    PromisePhoneNumbersApi.prototype.updatePhoneNumberPhoneNumbersPhoneNumberPatchWithHttpInfo = function (phoneNumber, updatePhoneNumber, _options) {
        var result = this.api.updatePhoneNumberPhoneNumbersPhoneNumberPatchWithHttpInfo(phoneNumber, updatePhoneNumber, _options);
        return result.toPromise();
    };
    PromisePhoneNumbersApi.prototype.updatePhoneNumberPhoneNumbersPhoneNumberPatch = function (phoneNumber, updatePhoneNumber, _options) {
        var result = this.api.updatePhoneNumberPhoneNumbersPhoneNumberPatch(phoneNumber, updatePhoneNumber, _options);
        return result.toPromise();
    };
    return PromisePhoneNumbersApi;
}());
exports.PromisePhoneNumbersApi = PromisePhoneNumbersApi;
//# sourceMappingURL=PromiseAPI.js.map