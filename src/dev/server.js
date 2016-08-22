import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from 'config/dev';

export function run () {

  const dev = new WebpackDevServer(webpack(config.webpack), {
    publicPath: config.webpack.output.publicPath,
    //hot: true,
    noInfo: true,
    //historyApiFallback: true
  });


  // Start server
  dev.listen(config.server.port, 'localhost', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Devserver running on http://localhost:${config.server.port}/`);
    }
  });

  return dev;
}