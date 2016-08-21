import express from 'express';
import { createDocument } from './html';

const app = express();

app.get('*', (req, res) => {
  const html = createDocument('Veronika Hallerová - obyčejná holka');
  res.status(200).send(html);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Running in ${process.env.NODE_ENV || 'development'} on port ${port}`);
});
