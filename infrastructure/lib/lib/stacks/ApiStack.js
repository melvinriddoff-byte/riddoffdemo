"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiStack = void 0;
const cdk = __importStar(require("aws-cdk-lib"));
const apigateway = __importStar(require("aws-cdk-lib/aws-apigatewayv2"));
class ApiStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // HTTP API v2 (cheaper than REST API)
        this.httpApi = new apigateway.HttpApi(this, 'EdRiddoffApi', {
            apiName: 'riddoff-ed-api',
            description: 'E-learning platform API',
            corsPreflight: {
                allowOrigins: ['https://ed.riddoff.com', 'http://localhost:5173'],
                allowMethods: [
                    apigateway.CorsHttpMethod.GET,
                    apigateway.CorsHttpMethod.POST,
                    apigateway.CorsHttpMethod.PUT,
                    apigateway.CorsHttpMethod.DELETE,
                ],
                allowHeaders: ['Content-Type', 'Authorization', 'X-Amz-Date'],
            },
        });
        // TODO: Add Lambda integrations and routes in Phase 2
        // - POST /v1/auth/signup
        // - POST /v1/auth/login
        // - GET /v1/courses
        // - POST /v1/enrollments
        // etc.
        new cdk.CfnOutput(this, 'ApiEndpoint', {
            value: this.httpApi.url,
            exportName: 'RiddoffEdApiEndpoint',
            description: 'HTTP API endpoint URL',
        });
        new cdk.CfnOutput(this, 'ApiId', {
            value: this.httpApi.apiId,
            exportName: 'RiddoffEdApiId',
            description: 'HTTP API ID',
        });
    }
}
exports.ApiStack = ApiStack;
//# sourceMappingURL=ApiStack.js.map