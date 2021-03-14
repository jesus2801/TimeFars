const path = require('path');
require('dotenv').config(path.resolve('../.env'));

import {App} from './config/server.config';

const main = async () => {
  const app: App = new App();
  const server = await app.listen();
  return server;
};

export const expressServer = main();
