import { fetch } from 'cross-fetch';
import { print } from 'graphql';
import { wrapSchema, introspectSchema } from '@graphql-tools/wrap';

const makeExecutor = (url) => {
  return async ({ document, variables }) => {
    const query = print(document);
    const fetchResult = await fetch(`${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });
    return fetchResult.json();
  };
};

export default async (url) => {
  const executor = makeExecutor(url);
  const schema = wrapSchema({
    schema: await introspectSchema(executor),
    executor,
  });
  return schema;
};
