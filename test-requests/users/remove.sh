#!/bin/bash

method='DELETE'
url="$(cat host.txt)"
body='{}'
urlPath='api/v1/users/'"$1"
curl -X "$method" -H 'Content-Type:application/json' -d "$body" "$url/$urlPath"
echo ''

