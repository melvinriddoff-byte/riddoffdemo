import * as cdk from 'aws-cdk-lib';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import { Construct } from 'constructs';

export class AuthStack extends cdk.Stack {
  public readonly userPool: cognito.UserPool;
  public readonly userPoolClient: cognito.UserPoolClient;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.userPool = new cognito.UserPool(this, 'EdUserPool', {
      userPoolName: 'riddoff-ed-users',
      selfSignUpEnabled: true,
      signInAliases: {
        email: true,
      },
      autoVerify: {
        email: true,
      },
      passwordPolicy: {
        minLength: 8,
        requireLowercase: true,
        requireDigits: true,
        requireSymbols: false,
        requireUppercase: false,
      },
      accountRecovery: cognito.AccountRecovery.EMAIL_ONLY,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    this.userPoolClient = new cognito.UserPoolClient(this, 'EdAppClient', {
      userPool: this.userPool,
      authFlows: {
        userPassword: true,
        custom: false,
        adminUserPassword: false,
        userSrp: false,
      },
      generateSecret: false,
      preventUserExistenceErrors: true,
    });

    new cdk.CfnOutput(this, 'UserPoolId', {
      value: this.userPool.userPoolId,
      exportName: 'RiddoffEdUserPoolId',
      description: 'Cognito User Pool ID',
    });

    new cdk.CfnOutput(this, 'UserPoolArn', {
      value: this.userPool.userPoolArn,
      exportName: 'RiddoffEdUserPoolArn',
      description: 'Cognito User Pool ARN',
    });

    new cdk.CfnOutput(this, 'ClientId', {
      value: this.userPoolClient.userPoolClientId,
      exportName: 'RiddoffEdClientId',
      description: 'Cognito App Client ID',
    });
  }
}
