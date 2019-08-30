#!/bin/bash

method='POST'
url="$(cat host.txt)"
body='{"title":"Post","content":"Content"}'
urlPath='api/v1/posts'
authHeader="Authorization:$(cat token.txt)"
curl -X "$method" -H 'Content-Type:application/json' -H "$authHeader" -d "$body" "$url/$urlPath"
echo ''

