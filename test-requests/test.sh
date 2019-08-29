#!/bin/bash

method='GET'
url="$(cat host.txt)"
body='{}'
urlPath=''
curl -X "$method" -H 'Content-Type:application/json' -d "$body" "$url/$urlPath"
echo ''

