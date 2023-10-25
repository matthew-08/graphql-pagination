import healthCheck from './query/healthCheck';
import { commentConnection } from './query/comments';

const resolvers = {
  Query: {
    healthCheck,
    commentConnection,
  }

};

export default resolvers;
