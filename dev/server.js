import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../webpack.config';

export function start (port) {
  const server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    //hot: true,
    noInfo: true
  });


  // Start server
  server.listen(port, 'localhost', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Devserver running on http://localhost:${port}/`);
    }
  });
}
