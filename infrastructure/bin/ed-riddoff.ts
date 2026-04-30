#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { EdRiddoffStack } from '../lib/stacks/EdRiddoffStack';

const app = new cdk.App();

new EdRiddoffStack(app, 'EdRiddoffStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'ap-south-1',
  },
  stackName: 'ed-riddoff',
  description: 'E-learning platform infrastructure for ed.riddoff.com',
});
