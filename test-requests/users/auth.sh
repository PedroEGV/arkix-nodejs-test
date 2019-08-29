#!/bin/bash

method='POST'
url="$(cat host.txt)"
body='{"username":"admin","password":"admin"}'
urlPath='auth'
curl -X "$method" -H 'Content-Type:application/json' -d "$body" "$url/$urlPath"
echo ''

