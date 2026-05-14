import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigatewayv2';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import { Construct } from 'constructs';
export interface ApiStackProps extends cdk.StackProps {
    userPool: cognito.IUserPool;
    userPoolClient: cognito.IUserPoolClient;
}
export declare class ApiStack extends cdk.Stack {
    readonly httpApi: apigateway.HttpApi;
    constructor(scope: Construct, id: string, props: ApiStackProps);
}
//# sourceMappingURL=ApiStack.d.ts.map