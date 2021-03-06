
switch (process.env.NODE_ENV) {

  case 'production':
    require('./app/server').start(process.env.PORT || 3000);
    break;

  case 'development':
    require('babel-register')();

    require('./dev/server').start(8080);
    require('./src/server').start(3000, 8080);
    break;

  default:
    throw 'Environment not specified!';
}
