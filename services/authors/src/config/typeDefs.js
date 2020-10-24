import { gql } from 'apollo-server';

const typeDefs = gql`
  type Author {
    id: ID!
    full_name: String!
    dob: String!
  }

  type Query {
    allAuthors: [Author]
    findAuthor(id: Int!): Author
  }

  type Mutation {
    createAuthor(full_name: String!, dob: String!): Author
  }
`;

export default typeDefs;
