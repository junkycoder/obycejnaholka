
export const createDocument = content => `
  <!DOCTYPE html>
  <html>
    <head>
      <title></title>
    </head>
    <body>
      <div id="app">${content}</div>
      <script src="/static/client.js"></script>
    </body>
  </html>
`;