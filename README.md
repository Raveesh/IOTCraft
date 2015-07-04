# IOTCraft
IOT Craft Meetup 3.0 Bangalore ( 4th July 2015)

Zetta Js  -->  { Reactive Programming, Websockets and  Rest APIs}

Architecture  --> Scouts, Drivers, Server Extensions, Registry, HTTP API , Z2Z Connection 
Hub and spoke architecture. 


-----------------------------------------------------------------------------------------------
# 1) Install Node JS : <br> 
'https://nodejs.org/download/'

2) C:\Users\sadhguru\Documents\IOT-Craft-Meetup\IOTCraft3\zetta-home-security>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (zetta-home-security)
version: (1.0.0) 0.1.0
description: Connected Home security system build using open source zetta js
entry point: (index.js) server.js
test command:
git repository:
keywords: zettaJs, API, Open source
author: Raveesh
license: (ISC) MIT
About to write to C:\Users\sadhguru\Documents\IOT-Craft-Meetup\IOTCraft3\zetta-home-security\package

{
  "name": "zetta-home-security",
  "version": "0.1.0",
  "description": "Connected Home security system build using open source zetta js",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "zettaJs",
    "API",
    "Open",
    "source"
  ],
  "author": "Raveesh",
  "license": "MIT"
}


Is this ok? (yes) yes


---------------------------------------------------------------
3) C:\Users\sadhguru\Documents\IOT-Craft-Meetup\IOTCraft3\zetta-home-security> npm install zetta --save <br>
<br>zetta@0.28.0 node_modules\zetta<br>
├── argo-formatter-siren@0.0.0<br>
├── zetta-rels@0.3.0<br>
├── zetta-scientist@0.3.0<br>
├── zetta-scout@0.5.0<br>
├── zetta-streams@0.2.0<br>
├── zetta-device@0.11.0<br>
├── colors@0.6.2<br>
├── strftime@0.8.4<br>
├── zetta-auto-scout@0.8.0 (zetta-scout@0.3.0)<br>
├── zetta-http-device@0.4.0 (zetta-device@0.10.0)<br>
├── node-uuid@1.4.3<br>
├── async@0.9.2<br>
├── api-media-type@0.1.0 (data-media-type@0.1.0, hypermedia-type@0.2.1)<br>
├── spdy@1.25.6<br>
├── calypso-query-decompiler@0.4.0 (caql-decompiler@0.8.0, caql@0.2.0)<br>
├── calypso@0.3.0 (caql@0.2.0)<br>
├── calypso-level@0.5.0 (caql-js-compiler@0.3.0)<br>
├── medeadown@1.1.7 (leveldown-open@1.0.3, keydir@2.1.1, abstract-leveldown@1.0.0)<br>
├── levelup@0.18.6 (xtend@3.0.0, prr@0.0.0, errno@0.1.3, bl@0.8.2, semver@2.3.2, readable-stream@1.0.33, deferred-leveldown@0.2.0)<br>
├── argo@0.6.0 (methods@0.1.0, pipeworks@1.2.1)<br>
├── titan@0.1.3 (argo-formatter@0.0.0, argo-url-router@0.0.6, argo-url-helper@0.2.0, argo-resource@0.0.11, argo-gzip@0.2.1, argo-clf@0.0.3)<br>
├── rx@2.2.28<br>
├── medea@0.17.1 (buffer-equal@0.0.1, monotonic-timestamp@0.0.8, buffer-crc32@0.2.5, pidlockfile@1.1.1, append-stream@1.2.2, mkdirp@0.5.1, run-parallel@1.1.2, es6-map@0.1.1)<br>
├── ws@0.4.32 (tinycolor@0.0.1, options@0.0.6, commander@2.1.0, nan@1.0.0)<br>
└── revolt@0.7.0 (rx@2.5.3, ws@0.5.0)<br>

----------------------------------------------------------------------------------------------------------------------
4) create the server.js file and run using the node server.js command

5) Bootstrap the intel edison board and ssh to it using Putty
6) npm install zetta-led-edison-driver --save  ( To install led driver) 
  npm WARN package.json zetta-home-security@0.1.0 No repository field. <br>
npm WARN package.json zetta-home-security@0.1.0 No README data<br>
npm http GET https://registry.npmjs.org/zetta-led-edison-driver<br>
npm http 200 https://registry.npmjs.org/zetta-led-edison-driver<br>
npm http GET https://registry.npmjs.org/zetta-led-edison-driver/-/zetta-led-edison-driver-0.6.0.tgz<br>
npm http 200 https://registry.npmjs.org/zetta-led-edison-driver/-/zetta-led-edison-driver-0.6.0.tgz<br>
npm http GET https://registry.npmjs.org/mraa-js<br>
npm http GET https://registry.npmjs.org/zetta-device<br>
npm http GET https://registry.npmjs.org/zetta-scout<br>
npm http 200 https://registry.npmjs.org/mraa-js<br>
npm http GET https://registry.npmjs.org/mraa-js/-/mraa-js-0.1.0.tgz<br>
npm http 200 https://registry.npmjs.org/mraa-js/-/mraa-js-0.1.0.tgz<br>
npm http 304 https://registry.npmjs.org/zetta-device<br>
npm http 304 https://registry.npmjs.org/zetta-scout<br>
npm http GET https://registry.npmjs.org/zetta-device/-/zetta-device-0.8.0.tgz<br>
npm http 200 https://registry.npmjs.org/zetta-device/-/zetta-device-0.8.0.tgz<br>
npm http GET https://registry.npmjs.org/zetta-streams<br>
npm http GET https://registry.npmjs.org/node-uuid<br>
npm http GET https://registry.npmjs.org/zetta-scientist<br>
npm http 304 https://registry.npmjs.org/node-uuid<br>
npm http 304 https://registry.npmjs.org/zetta-scientist<br>
npm http 304 https://registry.npmjs.org/zetta-streams<br>
npm http GET https://registry.npmjs.org/zetta-streams/-/zetta-streams-0.1.0.tgz<br>
npm http 200 https://registry.npmjs.org/zetta-streams/-/zetta-streams-0.1.0.tgz
zetta-led-edison-driver@0.6.0 node_modules/zetta-led-edison-driver
├── zetta-scout@0.5.0 (zetta-scientist@0.3.0)
├── mraa-js@0.1.0
└── zetta-device@0.8.0 (zetta-streams@0.1.0, node-uuid@1.4.3)
root@localedison6:~/zetta-home-security#
