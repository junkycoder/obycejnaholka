import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from '../webpack.config';
import config from 'config/dev';
import { createProxyServer } from 'http-proxy';

const server = new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  //hot: true,
  noInfo: true
});


// Start server
server.listen(config.server.port, 'localhost', (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Devserver running on http://localhost:${config.server.port}/`);
  }
});

export function proxy () {
  const opts = {
    target: {
      port: config.server.port
    }
  };

  const proxy = createProxyServer(opts);

  return (req, res) => proxy.web(req, res);
}
