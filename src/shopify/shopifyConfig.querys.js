import {createStorefrontApiClient} from '@shopify/storefront-api-client';

export const client = createStorefrontApiClient({
  storeDomain: 'https://sleeveconcept.com/',
  apiVersion: '2024-04',
  publicAccessToken: '0211ffd1a1d07e4bb8192d38bc3b1964',
});