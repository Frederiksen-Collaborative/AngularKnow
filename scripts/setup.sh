#!/bin/bash
cd ..
npm install bower
bower cache clean
bower install
npm install
cat "Setup complete..."
