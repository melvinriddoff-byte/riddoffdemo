import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { DatabaseStack } from './DatabaseStack';
import { AuthStack } from './AuthStack';
import { StorageStack } from './StorageStack';
import { ApiStack } from './ApiStack';
import { EmailStack } from './EmailStack';

export class EdRiddoffStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Phase 1: Create core infrastructure stacks
    const dbStack = new DatabaseStack(this, 'DatabaseStack', {
      env: props?.env,
    });

    const authStack = new AuthStack(this, 'AuthStack', {
      env: props?.env,
    });

    const storageStack = new StorageStack(this, 'StorageStack', {
      env: props?.env,
    });

    const apiStack = new ApiStack(this, 'ApiStack', {
      env: props?.env,
      userPool: authStack.userPool,
      userPoolClient: authStack.userPoolClient,
    });

    const emailStack = new EmailStack(this, 'EmailStack', {
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
