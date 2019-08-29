#!/bin/bash

method='POST'
url="$(cat host.txt)"
body='{"email":"test@test.com","name":"Fulanito de Tal","password":"12345678"}'
urlPath='api/v1/users'
curl -X "$method" -H 'Content-Type:application/json' -d "$body" "$url/$urlPath"
echo ''

