#!/bin/bash
npm run build
# ssh root@120.78.177.9 "mkdir /usr/local/nginx/sketch"
scp -r ./build/* root@120.78.177.9:/usr/local/nginx/physics
