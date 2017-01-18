# About

# Installation

```
sudo tee -a /etc/hosts <<EOF
127.0.0.1 botanicus.me
127.0.0.1 api.botanicus.me
EOF

rake build
rake run

curl http://api.botanicus.me:8000/posts.json
curl http://botanicus.me:8000/
```

# Deployment

TODO
