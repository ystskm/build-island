# build-island
Manage intermediate process for TypeScript, CommonJS and Vanilla JS mixed environment
You can get a solution for bugs at internal loader of nodejs as below: 
_Case1_ \[ERR_UNKNOWN_FILE_EXTENSION\]: Unknown file extension ".ts" for ...
_Case2_ require() of ES Module is not supported
_Case3_ exports is not defined

## Usage - for build child directory
```js
    ...
    "script": {
      "build": "npx build-island build cmd/oips"
    },
    ...
    // => you can run a build safely which root directory is at "./cmd/oips" (child directory, package `type: "module"`)
```
