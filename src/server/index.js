import express from 'express';

import bundle from './bundle';
import html from './html';

export function start (port, devport) {
  const server = express();

  server.get('/client.js', bundle(devport));
  server.get('/styles.css', bundle(devport));
  server.get('*', html());

  server.listen(port, () => {
    console.log(`Appserver running on http://localhost:${port}/`);
  });
}
