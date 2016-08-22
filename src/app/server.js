import express from 'express';
import config from 'config/app';

import { createDocument } from './html';
import devproxy from '../dev/proxy';
import router from '../router/server';

export function run () {

  const app = express();

  if (app.get('env') === 'development') {
    // Connect dev server
    app.all('/client/*', devproxy());
  } else {
    // Serve compiled bundles
    app.use('/client', express.static(__dirname + '/../client'));
  }

  // Server html document
  app.get('*', (req, res) => router({ location: req.url }, (action, payload) => {
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
  app.listen(config.server.port, () => {
    console.log(`Appserver running on http://localhost:${config.server.port}/`);
  });
}
