FROM nginx:alpine

# Variables.
ENV ROOT /webs

RUN mkdir -p $ROOT
WORKDIR $ROOT

COPY botanicus.me/build $ROOT/botanicus.me
COPY api.botanicus.me $ROOT/api.botanicus.me

# Override the existing default vhost.
COPY vhost.conf /etc/nginx/sites-enabled/botanicus.me.vhost
COPY nginx.conf /etc/nginx/nginx.conf

#RUN mkdir /run/nginx # Otherwise nginx fails.

EXPOSE 80
#CMD nginx -g 'daemon off;'
