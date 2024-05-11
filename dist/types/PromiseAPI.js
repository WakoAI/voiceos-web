"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromisePhoneNumbersApi = exports.PromiseDefaultApi = exports.PromiseConversationsApi = exports.PromiseAgentsApi = void 0;
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
    PromiseAgentsApi.prototype.deleteAgentWithHttpInfo = function (id, _options) {
        var result = this.api.deleteAgentWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseAgentsApi.prototype.deleteAgent = function (id, _options) {
        var result = this.api.deleteAgent(id, _options);
        return result.toPromise();
    };
    PromiseAgentsApi.prototype.getAgentWithHttpInfo = function (id, _options) {
        var result = this.api.getAgentWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseAgentsApi.prototype.getAgent = function (id, _options) {
        var result = this.api.getAgent(id, _options);
        return result.toPromise();
    };
    PromiseAgentsApi.prototype.listAgentsWithHttpInfo = function (createdAfter, createdBefore, index, limit, _options) {
        var result = this.api.listAgentsWithHttpInfo(createdAfter, createdBefore, index, limit, _options);
        return result.toPromise();
    };
    PromiseAgentsApi.prototype.listAgents = function (createdAfter, createdBefore, index, limit, _options) {
        var result = this.api.listAgents(createdAfter, createdBefore, index, limit, _options);
        return result.toPromise();
    };
    PromiseAgentsApi.prototype.updateAgentWithHttpInfo = function (id, updateAgent, _options) {
        var result = this.api.updateAgentWithHttpInfo(id, updateAgent, _options);
        return result.toPromise();
    };
    PromiseAgentsApi.prototype.updateAgent = function (id, updateAgent, _options) {
        var result = this.api.updateAgent(id, updateAgent, _options);
        return result.toPromise();
    };
    return PromiseAgentsApi;
}());
exports.PromiseAgentsApi = PromiseAgentsApi;
var ObservableAPI_2 = require("./ObservableAPI");
var PromiseConversationsApi = (function () {
    function PromiseConversationsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableConversationsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseConversationsApi.prototype.createPhoneCallWithHttpInfo = function (createCall, _options) {
        var result = this.api.createPhoneCallWithHttpInfo(createCall, _options);
        return result.toPromise();
    };
    PromiseConversationsApi.prototype.createPhoneCall = function (createCall, _options) {
        var result = this.api.createPhoneCall(createCall, _options);
        return result.toPromise();
    };
    PromiseConversationsApi.prototype.getAudioRecordingWithHttpInfo = function (id, _options) {
        var result = this.api.getAudioRecordingWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseConversationsApi.prototype.getAudioRecording = function (id, _options) {
        var result = this.api.getAudioRecording(id, _options);
        return result.toPromise();
    };
    PromiseConversationsApi.prototype.getConversationWithHttpInfo = function (id, _options) {
        var result = this.api.getConversationWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseConversationsApi.prototype.getConversation = function (id, _options) {
        var result = this.api.getConversation(id, _options);
        return result.toPromise();
    };
    PromiseConversationsApi.prototype.listConversationsWithHttpInfo = function (status, createdBefore, createdAfter, index, limit, _options) {
        var result = this.api.listConversationsWithHttpInfo(status, createdBefore, createdAfter, index, limit, _options);
        return result.toPromise();
    };
    PromiseConversationsApi.prototype.listConversations = function (status, createdBefore, createdAfter, index, limit, _options) {
        var result = this.api.listConversations(status, createdBefore, createdAfter, index, limit, _options);
        return result.toPromise();
    };
    return PromiseConversationsApi;
}());
exports.PromiseConversationsApi = PromiseConversationsApi;
var ObservableAPI_3 = require("./ObservableAPI");
var PromiseDefaultApi = (function () {
    function PromiseDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    PromiseDefaultApi.prototype.healthCheckGetWithHttpInfo = function (_options) {
        var result = this.api.healthCheckGetWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.healthCheckGet = function (_options) {
        var result = this.api.healthCheckGet(_options);
        return result.toPromise();
    };
    return PromiseDefaultApi;
}());
exports.PromiseDefaultApi = PromiseDefaultApi;
var ObservableAPI_4 = require("./ObservableAPI");
var PromisePhoneNumbersApi = (function () {
    function PromisePhoneNumbersApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservablePhoneNumbersApi(configuration, requestFactory, responseProcessor);
    }
    PromisePhoneNumbersApi.prototype.availableNumbersToBuyWithHttpInfo = function (contains, limit, _options) {
        var result = this.api.availableNumbersToBuyWithHttpInfo(contains, limit, _options);
        return result.toPromise();
    };
    PromisePhoneNumbersApi.prototype.availableNumbersToBuy = function (contains, limit, _options) {
        var result = this.api.availableNumbersToBuy(contains, limit, _options);
        return result.toPromise();
    };
    PromisePhoneNumbersApi.prototype.buyPhoneNumberWithHttpInfo = function (buyPhoneNumber, _options) {
        var result = this.api.buyPhoneNumberWithHttpInfo(buyPhoneNumber, _options);
        return result.toPromise();
    };
    PromisePhoneNumbersApi.prototype.buyPhoneNumber = function (buyPhoneNumber, _options) {
        var result = this.api.buyPhoneNumber(buyPhoneNumber, _options);
        return result.toPromise();
    };
    PromisePhoneNumbersApi.prototype.deletePhoneNumberWithHttpInfo = function (phoneNumber, releasePhoneNumber, _options) {
        var result = this.api.deletePhoneNumberWithHttpInfo(phoneNumber, releasePhoneNumber, _options);
        return result.toPromise();
    };
    PromisePhoneNumbersApi.prototype.deletePhoneNumber = function (phoneNumber, releasePhoneNumber, _options) {
        var result = this.api.deletePhoneNumber(phoneNumber, releasePhoneNumber, _options);
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
    PromisePhoneNumbersApi.prototype.listPhoneNumbersWithHttpInfo = function (createdAfter, createdBefore, index, limit, _options) {
        var result = this.api.listPhoneNumbersWithHttpInfo(createdAfter, createdBefore, index, limit, _options);
        return result.toPromise();
    };
    PromisePhoneNumbersApi.prototype.listPhoneNumbers = function (createdAfter, createdBefore, index, limit, _options) {
        var result = this.api.listPhoneNumbers(createdAfter, createdBefore, index, limit, _options);
        return result.toPromise();
    };
    PromisePhoneNumbersApi.prototype.updatePhoneNumberWithHttpInfo = function (phoneNumber, updatePhoneNumber, _options) {
        var result = this.api.updatePhoneNumberWithHttpInfo(phoneNumber, updatePhoneNumber, _options);
        return result.toPromise();
    };
    PromisePhoneNumbersApi.prototype.updatePhoneNumber = function (phoneNumber, updatePhoneNumber, _options) {
        var result = this.api.updatePhoneNumber(phoneNumber, updatePhoneNumber, _options);
        return result.toPromise();
    };
    return PromisePhoneNumbersApi;
}());
exports.PromisePhoneNumbersApi = PromisePhoneNumbersApi;
//# sourceMappingURL=PromiseAPI.js.map