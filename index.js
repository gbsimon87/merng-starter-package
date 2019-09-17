const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
const logger = require("morgan");
const cors = require("cors");

const { MONGODB } = require("./config.js");

// app.use(cors());
// app.use(logger("dev"));
// app.use(express.static(__dirname + "/app/build/"));

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books
  }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });
server.listen({ port: 5000 });

// mongoose
//   .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("MongoDB Connected");
//     return server.listen({ port: 5000 });
//   })
//   .then(({ url }) => {
//     console.log(`🚀  Server ready at ${url}`);
//   })
//   .catch(error => console.error(error));
