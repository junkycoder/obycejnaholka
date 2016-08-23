
export const createDocument = content => `
  <!DOCTYPE html>
  <html>
    <head>
      <title></title>
      <link rel="stylesheet" href="/client/styles.css" charset="utf-8">
    </head>
    <body>
      <div id="app">${content}</div>
      <script src="/client/app.js"></script>
    </body>
  </html>
`;
