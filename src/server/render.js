import { renderToString } from 'react-dom/server';

export default function render (content) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title></title>
        <link rel="stylesheet" href="/styles.css" charset="utf-8">
      </head>
      <body>
        <div id="app">${renderToString(content)}</div>
        <script src="/client.js"></script>
      </body>
    </html>
  `;
}
