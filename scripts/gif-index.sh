#!/bin/bash

curl --include --request GET http://localhost:3000/gifs \
  --header "Content-Type: application/json"
