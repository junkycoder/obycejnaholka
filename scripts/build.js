const exec = require('child_process').exec;

exec('./node_modules/babel-cli/bin/babel.js src -d build', (error) => {
    if (error) {
        console.error(error);
    }
});