#!/usr/bin/env bash

./node_modules/babel-cli/bin/babel.js src -d build

webpack -p --progress