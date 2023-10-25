import * as dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers/resolvers';

import typeDefs from './schema/typedefs';
import { initMongo } from './utils/mongo-init';
dotenv.config();

async function main() {
  try {
    const mongoClient = await initMongo();
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: {
        database: mongoClient,
      },
    });
    const { url } = await server.listen();
    console.log(`Server listening on URL: ${url}`);
  } catch (error) {
    console.error(error);
  }
}

main();
