#!/bin/bash

method='GET'
url="$(cat host.txt)"
body='{}'
urlPath='api/v1/users'
curl -X "$method" -H 'Content-Type:application/json' -d "$body" "$url/$urlPath"
echo ''

