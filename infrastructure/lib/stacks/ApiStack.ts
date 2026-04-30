import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigatewayv2';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import { Construct } from 'constructs';

export interface ApiStackProps extends cdk.StackProps {
  userPool: cognito.IUserPool;
  userPoolClient: cognito.IUserPoolClient;
}

export class ApiStack extends cdk.Stack {
  public readonly httpApi: apigateway.HttpApi;

  constructor(scope: Construct, id: string, props: ApiStackProps) {
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
      value: this.httpApi.url!,
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
