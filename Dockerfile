FROM nginx:alpine

# Variables.
ENV ROOT /webs

RUN mkdir -p $ROOT
WORKDIR $ROOT

COPY unplug.it/build $ROOT/unplug.it
COPY api.unplug.it $ROOT/api.unplug.it

# Override the existing default vhost.
COPY vhost.conf /etc/nginx/sites-enabled/unplug.it.vhost
COPY nginx.conf /etc/nginx/nginx.conf

#RUN mkdir /run/nginx # Otherwise nginx fails.

EXPOSE 80
#CMD nginx -g 'daemon off;'
