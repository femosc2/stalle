import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from '@schemas';
import { root } from '@resolvers/rootResolver';

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log('Running on http://localhost:4000/graphql');
});
