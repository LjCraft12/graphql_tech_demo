const express = require('express');
const expressGraphQL = require('express-graphql');
const app = express();

const config = require('./config/server');
const schema  = require('./schema');

app.use('/graphql', expressGraphQL({
   schema: schema,
    graphiql: true
}));

app.listen(config.port, () => {
   console.log('Server running on port: ' +config.port);
});