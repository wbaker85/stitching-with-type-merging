import { gql } from 'apollo-server';

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    genre: String!
    author: Author
  }

  type Query {
    allBooks: [Book]
    findBook(id: Int!): Book
    findAuthor(id: Int!): Author
  }

  type Author {
    id: ID!
    books: [Book]
  }

  type Mutation {
    createBook(title: String!, genre: String!, author_id: Int!): Book
  }
`;

export default typeDefs;
