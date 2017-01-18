# About

# Installation

```
sudo tee -a /etc/hosts <<EOF
127.0.0.1 unplug.it
127.0.0.1 api.unplug.it
EOF

rake build
rake run

curl http://api.unplug.it:8000/posts.json
curl http://unplug.it:8000/index.html
```

# Deployment

TODO
