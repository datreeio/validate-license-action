#!/bin/sh -l
ls -sla
cd /
npm ci
node validateLicense.js -l $*
