This is a starter package for those using the MERNG stack.

To run the application, navigate to the top level directory and run:
yarn run dev

It utilises an ApolloServer with a simple schema and resolver.

The client folder contains a stripped-down version of create-react-app.

Modify the object in the config.js file to connect to your database

Set up a config.js file with the following structure:
module.exports = {
MONGODB:
"mongodb+srv://<username>:<password>@cluster0-lsrec.mongodb.net/test?retryWrites=true&w=majority",
SECRET_KEY: "some very secret key"
};
