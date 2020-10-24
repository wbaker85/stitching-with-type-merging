import * as apiClient from '../api/apiClient';

const resolvers = {
  Query: {
    allBooks: () => apiClient.getAllBooks(),
    findBook: (root, args) => apiClient.findBookById(args.id),
    findAuthor: (root, { id }) => {
      return { id };
    },
  },
  Mutation: {
    createBook: (root, args) => apiClient.createBook(args),
  },
  Author: {
    books: (author) => apiClient.findBooksByAuthorId(author.id),
  },
};

export default resolvers;
