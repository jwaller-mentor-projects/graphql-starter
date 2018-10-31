const { GraphQLServer } = require("graphql-yoga");
const { readFileSync } = require("fs");

const typeDefs = readFileSync(`${__dirname}/schema/typeDefs.graphql`, "utf8");
const resolvers = require("./schema/resolvers");

let server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: ({ request }) => request
});

// let app = server.express;
// massive(CONNECTION_STRING).then(db => app.use("db", db));
// authCtrl(app)
// app.use(session({...}))

server.start(
  { endpoint: "/graphql", playground: "/graphiql", port: 3001 },
  ({ port }) => {
    console.log(`Listening @ port: ${port}`);
  }
);
