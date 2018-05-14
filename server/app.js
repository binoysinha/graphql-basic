import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import cors from 'cors';
import schema from './schema/schema';
import config from './config/config-dev';

const app = express();
app.use(cors());

mongoose.connect(config.mongoDBURI);
mongoose.connection.once('open', () => {
  console.log('connected to db');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log('listening on port ', PORT);
});
