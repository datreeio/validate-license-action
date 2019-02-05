#!/bin/sh -l

npm ci
node validateLicense.js
