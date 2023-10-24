import healthCheck from './query/healthCheck';
import { commentConnection } from './query/comments';

const Query = {
  healthCheck,
  commentConnection,
};

export default Query;
