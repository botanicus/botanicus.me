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

curl http://api.botanicus.dev:8000/posts.json
curl http://botanicus.dev:8000/
```

# Deployment

```
gem install travis
travis login --org
travis env set DOCKER_USERNAME ...
travis env set DOCKER_PASSWORD ...
```

# Delete all containers

```
docker rmi $(docker images -q)
```
