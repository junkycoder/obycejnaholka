import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../webpack.config';

export function start (port) {
  const server = new WebpackDevServer(webpack(config), {
    noInfo: true
  });


  server.listen(port, (err, result) => {
    if (err) throw (err);
  });
}
