import {MyChart} from './main';
import {Testing} from 'cdk8s';

describe('mern-gql-server-config', () => {
  test('Generate mern-gql-server-config', () => {
    const app = Testing.app();
    const chart = new MyChart(app, "mern-gql-server");
    const results = Testing.synth(chart)
    expect(results).toMatchSnapshot();
  });
});
