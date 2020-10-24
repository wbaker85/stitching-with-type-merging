import { ApolloServer } from 'apollo-server';
import { stitchSchemas } from '@graphql-tools/stitch';

import makeExecutableSchema from './makeExecutableSchema';

(async () => {
  const authorsSchema = await makeExecutableSchema('http://localhost:4001');
  const booksSchema = await makeExecutableSchema('http://localhost:4002');

  const schema = stitchSchemas({
    subschemas: [
      {
        schema: authorsSchema,
        merge: {
          Author: {
            fieldName: 'findAuthor',
            selectionSet: '{ id }',
            args: (partialAuthor) => ({ id: partialAuthor.id }),
          },
        },
      },
      {
        schema: booksSchema,
        merge: {
          Author: {
            fieldName: 'findAuthor',
            selectionSet: '{ id }',
            args: (partialAuthor) => ({ id: partialAuthor.id }),
          },
        },
      },
    ],
    mergeTypes: true,
  });

  const server = new ApolloServer({ schema });

  const port = process.env.PORT;
  const { url } = await server.listen({ port: 4000 });
  console.log(`Stitching gateway ready at ${url}`);
})();
