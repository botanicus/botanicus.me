# About

# Installation

```
sudo tee -a /etc/hosts <<EOF
127.0.0.1 botanicus.dev
127.0.0.1 api.botanicus.dev
127.0.0.1 blog.botanicus.dev
EOF

rake build
rake run

curl http://api.botanicus.dev/posts.json
curl http://botanicus.dev/
```

# Deployment

TODO
