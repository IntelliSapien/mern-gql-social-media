"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const cdk8s_1 = require("cdk8s");
describe('mern-gql-server-config', () => {
    test('Generate mern-gql-server-config', () => {
        const app = cdk8s_1.Testing.app();
        const chart = new main_1.MyChart(app, "mern-gql-server");
        const results = cdk8s_1.Testing.synth(chart);
        expect(results).toMatchSnapshot();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQStCO0FBQy9CLGlDQUE4QjtBQUU5QixRQUFRLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxFQUFFO0lBQ3RDLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxHQUFHLEVBQUU7UUFDM0MsTUFBTSxHQUFHLEdBQUcsZUFBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzFCLE1BQU0sS0FBSyxHQUFHLElBQUksY0FBTyxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sT0FBTyxHQUFHLGVBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDcEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge015Q2hhcnR9IGZyb20gJy4vbWFpbic7XG5pbXBvcnQge1Rlc3Rpbmd9IGZyb20gJ2NkazhzJztcblxuZGVzY3JpYmUoJ21lcm4tZ3FsLXNlcnZlci1jb25maWcnLCAoKSA9PiB7XG4gIHRlc3QoJ0dlbmVyYXRlIG1lcm4tZ3FsLXNlcnZlci1jb25maWcnLCAoKSA9PiB7XG4gICAgY29uc3QgYXBwID0gVGVzdGluZy5hcHAoKTtcbiAgICBjb25zdCBjaGFydCA9IG5ldyBNeUNoYXJ0KGFwcCwgXCJtZXJuLWdxbC1zZXJ2ZXJcIik7XG4gICAgY29uc3QgcmVzdWx0cyA9IFRlc3Rpbmcuc3ludGgoY2hhcnQpXG4gICAgZXhwZWN0KHJlc3VsdHMpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuICB9KTtcbn0pO1xuIl19