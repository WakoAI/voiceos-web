"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureAuthMethods = exports.XAPIKEYAuthentication = exports.APIKeyHeaderAuthentication = void 0;
var APIKeyHeaderAuthentication = (function () {
    function APIKeyHeaderAuthentication(apiKey) {
        this.apiKey = apiKey;
    }
    APIKeyHeaderAuthentication.prototype.getName = function () {
        return "APIKeyHeader";
    };
    APIKeyHeaderAuthentication.prototype.applySecurityAuthentication = function (context) {
        context.setHeaderParam("X-API-KEY", this.apiKey);
    };
    return APIKeyHeaderAuthentication;
}());
exports.APIKeyHeaderAuthentication = APIKeyHeaderAuthentication;
var XAPIKEYAuthentication = (function () {
    function XAPIKEYAuthentication(apiKey) {
        this.apiKey = apiKey;
    }
    XAPIKEYAuthentication.prototype.getName = function () {
        return "X-API-KEY";
    };
    XAPIKEYAuthentication.prototype.applySecurityAuthentication = function (context) {
        context.setHeaderParam("X-API-KEY", this.apiKey);
    };
    return XAPIKEYAuthentication;
}());
exports.XAPIKEYAuthentication = XAPIKEYAuthentication;
function configureAuthMethods(config) {
    var authMethods = {};
    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"];
    if (config["APIKeyHeader"]) {
        authMethods["APIKeyHeader"] = new APIKeyHeaderAuthentication(config["APIKeyHeader"]);
    }
    if (config["X-API-KEY"]) {
        authMethods["X-API-KEY"] = new XAPIKEYAuthentication(config["X-API-KEY"]);
    }
    return authMethods;
}
exports.configureAuthMethods = configureAuthMethods;
//# sourceMappingURL=auth.js.map