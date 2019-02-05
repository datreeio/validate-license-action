FROM node:10-alpine

COPY . /

ENTRYPOINT [ "/entrypoint.sh" ]
