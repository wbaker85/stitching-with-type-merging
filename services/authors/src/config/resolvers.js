import * as apiClient from '../api/apiClient';

const resolvers = {
  Query: {
    allAuthors: () => {
      return apiClient.getAllAuthors();
    },
    findAuthor: (root, args) => {
      return apiClient.findAuthorById(args.id);
    },
  },
  Mutation: {
    createAuthor: (root, args) => apiClient.createAuthor(args),
  },
};

export default resolvers;
