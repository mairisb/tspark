import { server } from './src/mocks/server';

process.env = {
  APP_NAME: 'TSpark',
  API_URL: '',
};

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
