#!/bin/bash

curl --include --request POST http://localhost:3000/images \
  --header "Content-Type: application/json" \
  --data '{
    "name": "image"
  }'
