FROM node:10-alpine
COPY validateLicense.js /validateLicense.js
COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT [ "/entrypoint.sh" ]
