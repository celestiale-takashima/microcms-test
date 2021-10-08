import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'celest-test',
  apiKey: process.env.API_KEY,
});