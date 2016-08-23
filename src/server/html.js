import router from '../router/server';

export const createDocument = content => `
  <!DOCTYPE html>
  <html>
    <head>
      <title></title>
      <link rel="stylesheet" href="/styles.css" charset="utf-8">
    </head>
    <body>
      <div id="app">${content}</div>
      <script src="/client.js"></script>
    </body>
  </html>
`;

export default function () {
  return (req, res) => router({ location: req.url }, (action, payload) => {
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
  })
}
