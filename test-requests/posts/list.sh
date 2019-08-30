#!/bin/bash

method='GET'
url="$(cat host.txt)"
body='{}'
urlPath='api/v1/posts'
authHeader="Authorization:$(cat token.txt)"
curl -X "$method" -H 'Content-Type:application/json' -H "$authHeader" -d "$body" "$url/$urlPath"
echo ''

