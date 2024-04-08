"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var configuration_1 = require("./configuration");
var PromiseAPI_1 = require("./types/PromiseAPI");
var servers_1 = require("./servers");
var models = require("./models/all");
var VoiceOS = (function () {
    function VoiceOS(api_key) {
        var authConfig = {
            "APIKeyHeader": api_key
        };
        this.config = (0, configuration_1.createConfiguration)({
            baseServer: servers_1.servers[0],
            authMethods: authConfig,
        });
        this.agents = new PromiseAPI_1.PromiseAgentsApi(this.config);
        this.calls = new PromiseAPI_1.PromiseCallsApi(this.config);
        this.phoneNumbers = new PromiseAPI_1.PromisePhoneNumbersApi(this.config);
        this.models = models;
    }
    return VoiceOS;
}());
exports.default = VoiceOS;
//# sourceMappingURL=client.js.map