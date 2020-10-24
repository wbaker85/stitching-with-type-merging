import server from './config/apollo';

(async () => {
  const port = process.env.PORT;
  const { url } = await server.listen({ port });
  console.log(`Books service ready at ${url}`);
})();
