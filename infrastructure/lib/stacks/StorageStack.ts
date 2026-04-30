import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import { Construct } from 'constructs';

export class StorageStack extends cdk.Stack {
  public readonly spaBucket: s3.Bucket;
  public readonly contentBucket: s3.Bucket;
  public readonly spaDistribution: cloudfront.Distribution;
  public readonly contentDistribution: cloudfront.Distribution;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // S3 Bucket for React SPA
    this.spaBucket = new s3.Bucket(this, 'EdRiddoffSpaBucket', {
      bucketName: `ed-riddoff-spa-${cdk.Stack.of(this).account}`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      versioned: true,
    });

    // S3 Bucket for Course Content (videos, PDFs)
    this.contentBucket = new s3.Bucket(this, 'EdRiddoffContentBucket', {
      bucketName: `ed-riddoff-content-${cdk.Stack.of(this).account}`,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      autoDeleteObjects: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      versioned: false,
    });

    // CloudFront Distribution for SPA with Origin Access Identity
    const spaOai = new cloudfront.OriginAccessIdentity(this, 'SpaOai', {
      comment: 'OAI for ed.riddoff.com SPA',
    });

    this.spaBucket.grantRead(spaOai);

    this.spaDistribution = new cloudfront.Distribution(this, 'SpaDistribution', {
      defaultBehavior: {
        origin: new origins.S3Origin(this.spaBucket, {
          originAccessIdentity: spaOai,
        }),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        compress: true,
      },
      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
        },
      ],
      minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
      enableIpv6: true,
    });

    // CloudFront Distribution for Course Content with Origin Access Identity
    const contentOai = new cloudfront.OriginAccessIdentity(this, 'ContentOai', {
      comment: 'OAI for ed.riddoff.com course content',
    });

    this.contentBucket.grantRead(contentOai);

    this.contentDistribution = new cloudfront.Distribution(this, 'ContentDistribution', {
      defaultBehavior: {
        origin: new origins.S3Origin(this.contentBucket, {
          originAccessIdentity: contentOai,
        }),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.HTTPS_ONLY,
        cachePolicy: new cloudfront.CachePolicy(this, 'ContentCachePolicy', {
          cachePolicyName: 'ed-riddoff-content-cache',
          defaultTtl: cdk.Duration.hours(4),
          maxTtl: cdk.Duration.hours(4),
          minTtl: cdk.Duration.minutes(0),
          enableAcceptEncodingGzip: true,
          enableAcceptEncodingBrotli: true,
        }),
        compress: true,
      },
      minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
      enableIpv6: true,
    });


    new cdk.CfnOutput(this, 'SpaBucketName', {
      value: this.spaBucket.bucketName,
      exportName: 'RiddoffEdSpaBucketName',
      description: 'S3 bucket for React SPA',
    });

    new cdk.CfnOutput(this, 'ContentBucketName', {
      value: this.contentBucket.bucketName,
      exportName: 'RiddoffEdContentBucketName',
      description: 'S3 bucket for course content',
    });

    new cdk.CfnOutput(this, 'SpaDistributionDomainName', {
      value: this.spaDistribution.domainName,
      exportName: 'RiddoffEdSpaDistributionDomain',
      description: 'CloudFront domain for SPA',
    });

    new cdk.CfnOutput(this, 'ContentDistributionDomainName', {
      value: this.contentDistribution.domainName,
      exportName: 'RiddoffEdContentDistributionDomain',
      description: 'CloudFront domain for course content',
    });
  }
}
