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
exports.EdRiddoffStack = void 0;
const cdk = __importStar(require("aws-cdk-lib"));
const DatabaseStack_1 = require("./DatabaseStack");
const AuthStack_1 = require("./AuthStack");
const StorageStack_1 = require("./StorageStack");
const ApiStack_1 = require("./ApiStack");
const EmailStack_1 = require("./EmailStack");
class EdRiddoffStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // Phase 1: Create core infrastructure stacks
        const dbStack = new DatabaseStack_1.DatabaseStack(this, 'DatabaseStack', {
            env: props?.env,
        });
        const authStack = new AuthStack_1.AuthStack(this, 'AuthStack', {
            env: props?.env,
        });
        const storageStack = new StorageStack_1.StorageStack(this, 'StorageStack', {
            env: props?.env,
        });
        const apiStack = new ApiStack_1.ApiStack(this, 'ApiStack', {
            env: props?.env,
            userPool: authStack.userPool,
            userPoolClient: authStack.userPoolClient,
        });
        const emailStack = new EmailStack_1.EmailStack(this, 'EmailStack', {
            env: props?.env,
        });
        // Add dependencies
        apiStack.addDependency(authStack);
        apiStack.addDependency(dbStack);
        new cdk.CfnOutput(this, 'ProjectStatus', {
            value: 'Phase 1: Infrastructure deployed successfully',
            description: 'Current deployment phase',
        });
        new cdk.CfnOutput(this, 'NextSteps', {
            value: 'Phase 2: Implement Lambda functions for API endpoints',
            description: 'Next phase of implementation',
        });
    }
}
exports.EdRiddoffStack = EdRiddoffStack;
//# sourceMappingURL=EdRiddoffStack.js.map