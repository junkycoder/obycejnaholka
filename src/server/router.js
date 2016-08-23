import React from 'react';
import { match, RouterContext } from 'react-router'

import render from './render';
import routes from '../routes';

export default function () {

  return (req, res) => match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {

    if (error) {
      res.status(500).send(error.message);
      return;
    }

    if (redirectLocation) {
      res.status(302, redirectLocation.pathname + redirectLocation.search);
      return;
    }

    if (renderProps) {
      const html = render(<RouterContext {...renderProps} />);

      res.status(200).send(html);
      return;
    }

    res.status(404).send('Not found');
  });
}
