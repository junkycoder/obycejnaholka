import express from 'express';

const app = express();

app.get('*', (req, res) => {
  res.status(200).send('Veronika Hallerová - obyčejná holka');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Running in ${process.env.NODE_ENV || 'development'} on port ${port}`);
});
