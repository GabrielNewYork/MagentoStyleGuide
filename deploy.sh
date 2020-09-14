#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

git add dist && git commit -m "deploy"
git subtree push --prefix dist origin page

cd -