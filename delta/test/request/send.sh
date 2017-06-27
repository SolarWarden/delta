curl -vX POST http://localhost:3000/feed/ -d @$1 \
-H "Content-Type: application/json" \
-H "authorization: myauthkey" \
-H "cid: 12345" \
-H "pn: wip" \
-H "pv: 1.0.0" \
-H "rid: 987654321" 
