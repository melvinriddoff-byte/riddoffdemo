import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import { Construct } from 'constructs';
export declare class StorageStack extends cdk.Stack {
    readonly spaBucket: s3.Bucket;
    readonly contentBucket: s3.Bucket;
    readonly spaDistribution: cloudfront.Distribution;
    readonly contentDistribution: cloudfront.Distribution;
    constructor(scope: Construct, id: string, props?: cdk.StackProps);
}
//# sourceMappingURL=StorageStack.d.ts.map