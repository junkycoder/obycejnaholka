import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';

import routes from './routes';

export default function ({ location }, callback) {

  match({ routes, location }, (error, redirectLocation, renderProps) => {

    if (error) {
      callback('error', error.message);
      return;
    }

    if (redirectLocation) {
      callback('redirect', redirectLocation);
      return;
    }

    if (renderProps) {
      const html = renderToString(<RouterContext {...renderProps} />);

      callback('render', html);
      return;
    }

    callback();

  });
}
