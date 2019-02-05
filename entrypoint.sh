#!/bin/sh -l
ls -sla
cd /
node validateLicense.js -l $*
