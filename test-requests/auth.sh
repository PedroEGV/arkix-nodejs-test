#!/bin/bash

method='POST'
url="$(cat host.txt)"
body='{"email":"test@test.com","password":"12345678"}'
urlPath='api/v1/auth'
curl -X "$method" -H 'Content-Type:application/json' -d "$body" "$url/$urlPath"
echo ''

