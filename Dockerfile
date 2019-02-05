FROM node:10-alpine
COPY package.json /package.json
COPY validateLicense.js /validateLicense.js
COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT [ "/entrypoint.sh" ]
