
console.log(`Started in "${process.env.NODE_ENV}" environment`);

if (process.env.NODE_ENV === 'production') {
    require('../build/app/server').run();
}
else {
    require('babel-register')();

    require('../src/app/server').run(require('../dev/server'));
}
