import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class EmailStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
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
