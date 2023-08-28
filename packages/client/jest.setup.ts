import { server } from './src/mocks/server';

process.env = {
  TSPARK_APP_APP_NAME: 'TSpark',
  TSPARK_APP_API_URL: '',
};

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
