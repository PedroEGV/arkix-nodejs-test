#!/bin/bash

method='POST'
url="$(cat host.txt)"
body='{"email":"test@test.com","name":"Fulanito de Tal","password":"12345678"}'
urlPath='api/v1/users'
authHeader="Authorization:$(cat token.txt)"
curl -X "$method" -H 'Content-Type:application/json' -H "$authHeader" -d "$body" "$url/$urlPath"
echo ''

