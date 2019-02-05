FROM node:10
COPY validateLicense.js /validateLicense.js
COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT [ "/entrypoint.sh" ]
