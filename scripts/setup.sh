#!/bin/bash
cd ..
npm install -g bower
bower cache clean
bower install
npm install
echo "Setup complete..."
