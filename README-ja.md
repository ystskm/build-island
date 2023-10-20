# build-island
本モジュールは TypeScript や CommonJS が混在したプロジェクト環境でビルドを成功させるための中間プロセス生成プログラムです。  
このモジュールを利用することで、現在（NodeJS v16 ~ v20）の内部の ESM ローダー（多くは ts-node を利用しているでしょう）で発生している問題に対応できる可能性があります。問題は以下のようなエラーが起こる現象です：  
(エラーケース1) __\[ERR_UNKNOWN_FILE_EXTENSION\]: Unknown file extension ".ts" for ...__  
(エラーケース2) __require() of ES Module is not supported__  
(エラーケース3) __exports is not defined__ 

## 使い方 - 子フォルダに格納されたプロジェクトのビルド
```js
    ...
    "script": {
      "build": "npx build-island b cmd/oips"
    },
    ...
    // => 親パッケージの build プログラムで `build-island` を利用することで、 "./cmd/oips" 内を正常にビルドできます。 (この子フォルダの `package.json` は親パッケージとは異なり `type: "module"` が指定されています。)
```
