import { gql } from 'apollo-server';

const Query = gql`
  input CommentCollectionInput {
    first: Int!
    after: String
  }

  type Query {
    healthCheck: String!
    commentConnection(input: CommentCollectionInput): CommentConnection!
  }

  type User {
    name: String!
  }

  type Comment {
    user: User
    content: String!
    date: String!
  }

  type Edge {
    cursor: String!
    node: Comment!
  }

  type CommentConnection {
    pageInfo: PageInfo!
    edges: [Edge!]!
  }

  type PageInfo {
    hasPreviousPage: Boolean!
    hasNextPage: Boolean!
    startCursor: String
    endCursor: String
  }
`;

export { Query };
