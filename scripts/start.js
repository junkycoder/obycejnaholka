
if (process.env.NODE_ENV === 'production') {
    require('../build/server');
}
else {
    require('babel-register')();
    require('../src/server');
}