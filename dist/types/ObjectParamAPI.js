"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectPhoneNumbersApi = exports.ObjectDefaultApi = exports.ObjectConversationsApi = exports.ObjectAgentsApi = void 0;
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
        return this.api.deleteAgentWithHttpInfo(param.id, options).toPromise();
    };
    ObjectAgentsApi.prototype.deleteAgent = function (param, options) {
        return this.api.deleteAgent(param.id, options).toPromise();
    };
    ObjectAgentsApi.prototype.getAgentWithHttpInfo = function (param, options) {
        return this.api.getAgentWithHttpInfo(param.id, options).toPromise();
    };
    ObjectAgentsApi.prototype.getAgent = function (param, options) {
        return this.api.getAgent(param.id, options).toPromise();
    };
    ObjectAgentsApi.prototype.listAgentsWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listAgentsWithHttpInfo(param.createdAfter, param.createdBefore, param.index, param.limit, options).toPromise();
    };
    ObjectAgentsApi.prototype.listAgents = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listAgents(param.createdAfter, param.createdBefore, param.index, param.limit, options).toPromise();
    };
    ObjectAgentsApi.prototype.updateAgentWithHttpInfo = function (param, options) {
        return this.api.updateAgentWithHttpInfo(param.id, param.updateAgent, options).toPromise();
    };
    ObjectAgentsApi.prototype.updateAgent = function (param, options) {
        return this.api.updateAgent(param.id, param.updateAgent, options).toPromise();
    };
    return ObjectAgentsApi;
}());
exports.ObjectAgentsApi = ObjectAgentsApi;
var ObservableAPI_2 = require("./ObservableAPI");
var ObjectConversationsApi = (function () {
    function ObjectConversationsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableConversationsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectConversationsApi.prototype.createPhoneCallWithHttpInfo = function (param, options) {
        return this.api.createPhoneCallWithHttpInfo(param.createCall, options).toPromise();
    };
    ObjectConversationsApi.prototype.createPhoneCall = function (param, options) {
        return this.api.createPhoneCall(param.createCall, options).toPromise();
    };
    ObjectConversationsApi.prototype.getAudioRecordingWithHttpInfo = function (param, options) {
        return this.api.getAudioRecordingWithHttpInfo(param.id, options).toPromise();
    };
    ObjectConversationsApi.prototype.getAudioRecording = function (param, options) {
        return this.api.getAudioRecording(param.id, options).toPromise();
    };
    ObjectConversationsApi.prototype.getConversationWithHttpInfo = function (param, options) {
        return this.api.getConversationWithHttpInfo(param.id, options).toPromise();
    };
    ObjectConversationsApi.prototype.getConversation = function (param, options) {
        return this.api.getConversation(param.id, options).toPromise();
    };
    ObjectConversationsApi.prototype.listConversationsWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listConversationsWithHttpInfo(param.status, param.createdBefore, param.createdAfter, param.index, param.limit, options).toPromise();
    };
    ObjectConversationsApi.prototype.listConversations = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listConversations(param.status, param.createdBefore, param.createdAfter, param.index, param.limit, options).toPromise();
    };
    return ObjectConversationsApi;
}());
exports.ObjectConversationsApi = ObjectConversationsApi;
var ObservableAPI_3 = require("./ObservableAPI");
var ObjectDefaultApi = (function () {
    function ObjectDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    ObjectDefaultApi.prototype.healthCheckGetWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.healthCheckGetWithHttpInfo(options).toPromise();
    };
    ObjectDefaultApi.prototype.healthCheckGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.healthCheckGet(options).toPromise();
    };
    return ObjectDefaultApi;
}());
exports.ObjectDefaultApi = ObjectDefaultApi;
var ObservableAPI_4 = require("./ObservableAPI");
var ObjectPhoneNumbersApi = (function () {
    function ObjectPhoneNumbersApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservablePhoneNumbersApi(configuration, requestFactory, responseProcessor);
    }
    ObjectPhoneNumbersApi.prototype.availableNumbersToBuyWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.availableNumbersToBuyWithHttpInfo(param.contains, param.limit, options).toPromise();
    };
    ObjectPhoneNumbersApi.prototype.availableNumbersToBuy = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.availableNumbersToBuy(param.contains, param.limit, options).toPromise();
    };
    ObjectPhoneNumbersApi.prototype.buyPhoneNumberWithHttpInfo = function (param, options) {
        return this.api.buyPhoneNumberWithHttpInfo(param.buyPhoneNumber, options).toPromise();
    };
    ObjectPhoneNumbersApi.prototype.buyPhoneNumber = function (param, options) {
        return this.api.buyPhoneNumber(param.buyPhoneNumber, options).toPromise();
    };
    ObjectPhoneNumbersApi.prototype.deletePhoneNumberWithHttpInfo = function (param, options) {
        return this.api.deletePhoneNumberWithHttpInfo(param.phoneNumber, param.releasePhoneNumber, options).toPromise();
    };
    ObjectPhoneNumbersApi.prototype.deletePhoneNumber = function (param, options) {
        return this.api.deletePhoneNumber(param.phoneNumber, param.releasePhoneNumber, options).toPromise();
    };
    ObjectPhoneNumbersApi.prototype.getPhoneNumberWithHttpInfo = function (param, options) {
        return this.api.getPhoneNumberWithHttpInfo(param.phoneNumber, options).toPromise();
    };
    ObjectPhoneNumbersApi.prototype.getPhoneNumber = function (param, options) {
        return this.api.getPhoneNumber(param.phoneNumber, options).toPromise();
    };
    ObjectPhoneNumbersApi.prototype.listPhoneNumbersWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listPhoneNumbersWithHttpInfo(param.createdAfter, param.createdBefore, param.index, param.limit, options).toPromise();
    };
    ObjectPhoneNumbersApi.prototype.listPhoneNumbers = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listPhoneNumbers(param.createdAfter, param.createdBefore, param.index, param.limit, options).toPromise();
    };
    ObjectPhoneNumbersApi.prototype.updatePhoneNumberWithHttpInfo = function (param, options) {
        return this.api.updatePhoneNumberWithHttpInfo(param.phoneNumber, param.updatePhoneNumber, options).toPromise();
    };
    ObjectPhoneNumbersApi.prototype.updatePhoneNumber = function (param, options) {
        return this.api.updatePhoneNumber(param.phoneNumber, param.updatePhoneNumber, options).toPromise();
    };
    return ObjectPhoneNumbersApi;
}());
exports.ObjectPhoneNumbersApi = ObjectPhoneNumbersApi;
//# sourceMappingURL=ObjectParamAPI.js.map