import { Construct } from "constructs";
import { App, Chart, ChartProps } from "cdk8s";
import { DeboredApp, IngressType } from "cdk8s-debore";
export class MyChart extends Chart {
  constructor(scope: Construct, id: string, props: ChartProps = {}) {
    super(scope, id, props);

    new DeboredApp(this, "mern-gql-server", {
      image: "abhiit89/mern-gql:latest",
      autoScale: true,
      defaultReplicas: 1,
      namespace: "mern-gql",
      ingress: IngressType.CLUSTER_IP,
      containerPort: 4000,
    });
  }
}

const app = new App();
new MyChart(app, "mern-gql-server");
app.synth();
