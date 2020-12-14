#!/bin/bash
ng build --prod --output-path docs --base-href="https://gitlukeaustin.github.io";
cp docs/index.html docs/404.html;
cp -r docs ../.;
