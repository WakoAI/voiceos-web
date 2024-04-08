"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectPhoneNumbersApi = exports.ObjectCallsApi = exports.ObjectAgentsApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectAgentsApi = (function () {
    function ObjectAgentsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAgentsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectAgentsApi.prototype.createAgentWithHttpInfo = function (param, options) {
        return this.api.createAgentWithHttpInfo(param.agentConfiguration, options).toPromise();
    };
    ObjectAgentsApi.prototype.createAgent = function (param, options) {
        return this.api.createAgent(param.agentConfiguration, options).toPromise();
    };
    ObjectAgentsApi.prototype.deleteAgentWithHttpInfo = function (param, options) {
        return this.api.deleteAgentWithHttpInfo(param.agentId, options).toPromise();
    };
    ObjectAgentsApi.prototype.deleteAgent = function (param, options) {
        return this.api.deleteAgent(param.agentId, options).toPromise();
    };
    ObjectAgentsApi.prototype.getAgentWithHttpInfo = function (param, options) {
        return this.api.getAgentWithHttpInfo(param.agentId, options).toPromise();
    };
    ObjectAgentsApi.prototype.getAgent = function (param, options) {
        return this.api.getAgent(param.agentId, options).toPromise();
    };
    ObjectAgentsApi.prototype.listAgentsWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listAgentsWithHttpInfo(param.createdAfter, param.createdBefore, param.index, param.size, options).toPromise();
    };
    ObjectAgentsApi.prototype.listAgents = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listAgents(param.createdAfter, param.createdBefore, param.index, param.size, options).toPromise();
    };
    ObjectAgentsApi.prototype.updateAgentWithHttpInfo = function (param, options) {
        return this.api.updateAgentWithHttpInfo(param.agentId, param.updateAgent, options).toPromise();
    };
    ObjectAgentsApi.prototype.updateAgent = function (param, options) {
        return this.api.updateAgent(param.agentId, param.updateAgent, options).toPromise();
    };
    return ObjectAgentsApi;
}());
exports.ObjectAgentsApi = ObjectAgentsApi;
var ObservableAPI_2 = require("./ObservableAPI");
var ObjectCallsApi = (function () {
    function ObjectCallsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableCallsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectCallsApi.prototype.createCallWithHttpInfo = function (param, options) {
        return this.api.createCallWithHttpInfo(param.createCall, options).toPromise();
    };
    ObjectCallsApi.prototype.createCall = function (param, options) {
        return this.api.createCall(param.createCall, options).toPromise();
    };
    ObjectCallsApi.prototype.getCallWithHttpInfo = function (param, options) {
        return this.api.getCallWithHttpInfo(param.callId, options).toPromise();
    };
    ObjectCallsApi.prototype.getCall = function (param, options) {
        return this.api.getCall(param.callId, options).toPromise();
    };
    ObjectCallsApi.prototype.getRecordingWithHttpInfo = function (param, options) {
        return this.api.getRecordingWithHttpInfo(param.callId, options).toPromise();
    };
    ObjectCallsApi.prototype.getRecording = function (param, options) {
        return this.api.getRecording(param.callId, options).toPromise();
    };
    ObjectCallsApi.prototype.listCallsWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listCallsWithHttpInfo(param.status, param.createdBefore, param.createdAfter, param.index, param.size, options).toPromise();
    };
    ObjectCallsApi.prototype.listCalls = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listCalls(param.status, param.createdBefore, param.createdAfter, param.index, param.size, options).toPromise();
    };
    return ObjectCallsApi;
}());
exports.ObjectCallsApi = ObjectCallsApi;
var ObservableAPI_3 = require("./ObservableAPI");
var ObjectPhoneNumbersApi = (function () {
    function ObjectPhoneNumbersApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservablePhoneNumbersApi(configuration, requestFactory, responseProcessor);
    }
    ObjectPhoneNumbersApi.prototype.buyPhoneNumberPhoneNumbersBuyPostWithHttpInfo = function (param, options) {
        return this.api.buyPhoneNumberPhoneNumbersBuyPostWithHttpInfo(param.buyPhoneNumber, options).toPromise();
    };
    ObjectPhoneNumbersApi.prototype.buyPhoneNumberPhoneNumbersBuyPost = function (param, options) {
        return this.api.buyPhoneNumberPhoneNumbersBuyPost(param.buyPhoneNumber, options).toPromise();
    };
    ObjectPhoneNumbersApi.prototype.deletePhoneNumberPhoneNumbersPhoneNumberDeleteWithHttpInfo = function (param, options) {
        return this.api.deletePhoneNumberPhoneNumbersPhoneNumberDeleteWithHttpInfo(param.phoneNumber, param.releasePhoneNumber, options).toPromise();
    };
    ObjectPhoneNumbersApi.prototype.deletePhoneNumberPhoneNumbersPhoneNumberDelete = function (param, options) {
        return this.api.deletePhoneNumberPhoneNumbersPhoneNumberDelete(param.phoneNumber, param.releasePhoneNumber, options).toPromise();
    };
    ObjectPhoneNumbersApi.prototype.getPhoneNumberWithHttpInfo = function (param, options) {
        return this.api.getPhoneNumberWithHttpInfo(param.phoneNumber, options).toPromise();
    };
    ObjectPhoneNumbersApi.prototype.getPhoneNumber = function (param, options) {
        return this.api.getPhoneNumber(param.phoneNumber, options).toPromise();
    };
    ObjectPhoneNumbersApi.prototype.listAvailablePhoneNumbersWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listAvailablePhoneNumbersWithHttpInfo(param.areaCode, param.contains, param.limit, options).toPromise();
    };
    ObjectPhoneNumbersApi.prototype.listAvailablePhoneNumbers = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listAvailablePhoneNumbers(param.areaCode, param.contains, param.limit, options).toPromise();
    };
    ObjectPhoneNumbersApi.prototype.listPhoneNumbersWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listPhoneNumbersWithHttpInfo(param.createdAfter, param.createdBefore, param.index, param.size, options).toPromise();
    };
    ObjectPhoneNumbersApi.prototype.listPhoneNumbers = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listPhoneNumbers(param.createdAfter, param.createdBefore, param.index, param.size, options).toPromise();
    };
    ObjectPhoneNumbersApi.prototype.updatePhoneNumberPhoneNumbersPhoneNumberPatchWithHttpInfo = function (param, options) {
        return this.api.updatePhoneNumberPhoneNumbersPhoneNumberPatchWithHttpInfo(param.phoneNumber, param.updatePhoneNumber, options).toPromise();
    };
    ObjectPhoneNumbersApi.prototype.updatePhoneNumberPhoneNumbersPhoneNumberPatch = function (param, options) {
        return this.api.updatePhoneNumberPhoneNumbersPhoneNumberPatch(param.phoneNumber, param.updatePhoneNumber, options).toPromise();
    };
    return ObjectPhoneNumbersApi;
}());
exports.ObjectPhoneNumbersApi = ObjectPhoneNumbersApi;
//# sourceMappingURL=ObjectParamAPI.js.map