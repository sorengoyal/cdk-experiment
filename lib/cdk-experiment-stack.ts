import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as widget_service from '../lib/widget-service'
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkExperimentStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new widget_service.WidgetService(this, 'Widgets');

  }
}