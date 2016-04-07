#!/bin/bash

curl --include --request POST http://localhost:3000/gifs \
  --header "Content-Type: application/json" \
  --data '{
    "name": "testName",
    "comment": "testComment" }'
