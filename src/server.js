import express from 'express';
import { createProxyServer } from 'http-proxy';

import { createDocument } from './html';
import router from './router/server';

function proxy ({ port }) {
  const proxy = createProxyServer({
    target: {
      port
    }
  });

  return (req, res) => proxy.web(req, res);
}

export function start (port, devserver) {
  const server = express();

  // Serve bundled assets
  if (devserver) server.all('/client/*', proxy(devserver));
  else server.use('/client', express.static(__dirname + '/client'));

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
  server.listen(port, () => {
    console.log(`Appserver running on http://localhost:${port}/`);
  });
}
