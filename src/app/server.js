import express from 'express';
import config from 'config/app';

import { createDocument } from './html';
import router from '../router/server';

export function run (devserver) {
  const server = express();

  // Serve bundled assets
  if (devserver) server.all('/client/*', devserver.proxy());
  else server.use('/client', express.static(__dirname + '/../client'));


  // Serve html document
  server.get('*', (req, res) => router({ location: req.url }, (action, payload) => {
    switch (action) {

      case 'error':
        res.status(500).send(payload);
        break;

      case 'redirect':
        const {
          pathname,
          search
        } = payload;

        res.status(302, pathname + search);
        break;

      case 'render':
        const doc = createDocument(payload);

        res.status(200).send(doc);
        break;

      default:
        res.status(404).send('Not found');
        break;
    }
  }));

  // Start server
  server.listen(config.server.port, () => {
    console.log(`Appserver running on http://localhost:${config.server.port}/`);
  });
}
