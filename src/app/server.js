import express from 'express';
import config from 'config/app';

import { createDocument } from './html';
import devproxy from '../dev/proxy';

export function run () {
  
  const app = express();

  if (app.get('env') === 'development') {
    // Connect dev server
    app.all('/client/*', devproxy());
  } else {
    // Serve compiled bundles 
    app.use('/client', express.static(__dirname + '/../client'));
  }


  app.get('*', (req, res) => {
    const html = createDocument('Veronika Hallerová - obyčejná holka');
    res.status(200).send(html);
  });

  // Start server
  app.listen(config.server.port, () => {
    console.log(`Appserver running on http://localhost:${config.server.port}/`);
  });
}
