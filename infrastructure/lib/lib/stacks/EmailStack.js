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
exports.EmailStack = void 0;
const cdk = __importStar(require("aws-cdk-lib"));
class EmailStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // SES email templates will be created manually via AWS Console
        // or via a separate script since CDK doesn't have native SES template support yet
        // For now, document the setup needed:
        new cdk.CfnOutput(this, 'SesSetupInstructions', {
            value: 'Verify @ed.riddoff.com domain in SES console and create email templates',
            description: 'Manual SES setup required',
        });
        // TODO: Create SES email templates in Phase 2
        // - enrollment-confirmation
        // - payment-receipt
        // - otp-verification
        // - cohort-welcome
    }
}
exports.EmailStack = EmailStack;
//# sourceMappingURL=EmailStack.js.map