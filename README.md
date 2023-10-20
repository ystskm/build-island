# build-island
Manage intermediate process for TypeScript, CommonJS and Vanilla JS mixed environment  
You can get a solution for bugs at internal loader of nodejs as below:   
Case1 __\[ERR_UNKNOWN_FILE_EXTENSION\]: Unknown file extension ".ts" for ...__  
Case2 __require() of ES Module is not supported__  
Case3 __exports is not defined__ 

## Usage - for build child directory
```js
    ...
    "script": {
      "build": "npx build-island build cmd/oips"
    },
    ...
    // => you can run a build safely which root directory is at "./cmd/oips" (child directory, package `type: "module"`)
```
