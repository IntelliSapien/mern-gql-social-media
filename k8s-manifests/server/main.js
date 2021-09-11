"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyChart = void 0;
const cdk8s_1 = require("cdk8s");
const cdk8s_debore_1 = require("cdk8s-debore");
class MyChart extends cdk8s_1.Chart {
    constructor(scope, id, props = {}) {
        super(scope, id, props);
        new cdk8s_debore_1.DeboredApp(this, "mern-gql-server", {
            image: "abhiit89/mern-gql:latest",
            autoScale: true,
            defaultReplicas: 1,
            namespace: "mern-gql",
            ingress: cdk8s_debore_1.IngressType.CLUSTER_IP,
            containerPort: 4000,
        });
    }
}
exports.MyChart = MyChart;
const app = new cdk8s_1.App();
new MyChart(app, "mern-gql-server");
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsaUNBQStDO0FBQy9DLCtDQUF1RDtBQUN2RCxNQUFhLE9BQVEsU0FBUSxhQUFLO0lBQ2hDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsUUFBb0IsRUFBRTtRQUM5RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixJQUFJLHlCQUFVLENBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFO1lBQ3RDLEtBQUssRUFBRSwwQkFBMEI7WUFDakMsU0FBUyxFQUFFLElBQUk7WUFDZixlQUFlLEVBQUUsQ0FBQztZQUNsQixTQUFTLEVBQUUsVUFBVTtZQUNyQixPQUFPLEVBQUUsMEJBQVcsQ0FBQyxVQUFVO1lBQy9CLGFBQWEsRUFBRSxJQUFJO1NBQ3BCLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQWJELDBCQWFDO0FBRUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxXQUFHLEVBQUUsQ0FBQztBQUN0QixJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUNwQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgQXBwLCBDaGFydCwgQ2hhcnRQcm9wcyB9IGZyb20gXCJjZGs4c1wiO1xuaW1wb3J0IHsgRGVib3JlZEFwcCwgSW5ncmVzc1R5cGUgfSBmcm9tIFwiY2RrOHMtZGVib3JlXCI7XG5leHBvcnQgY2xhc3MgTXlDaGFydCBleHRlbmRzIENoYXJ0IHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IENoYXJ0UHJvcHMgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgbmV3IERlYm9yZWRBcHAodGhpcywgXCJtZXJuLWdxbC1zZXJ2ZXJcIiwge1xuICAgICAgaW1hZ2U6IFwiYWJoaWl0ODkvbWVybi1ncWw6bGF0ZXN0XCIsXG4gICAgICBhdXRvU2NhbGU6IHRydWUsXG4gICAgICBkZWZhdWx0UmVwbGljYXM6IDEsXG4gICAgICBuYW1lc3BhY2U6IFwibWVybi1ncWxcIixcbiAgICAgIGluZ3Jlc3M6IEluZ3Jlc3NUeXBlLkNMVVNURVJfSVAsXG4gICAgICBjb250YWluZXJQb3J0OiA0MDAwLFxuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbm5ldyBNeUNoYXJ0KGFwcCwgXCJtZXJuLWdxbC1zZXJ2ZXJcIik7XG5hcHAuc3ludGgoKTtcbiJdfQ==