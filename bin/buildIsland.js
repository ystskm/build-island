#!/usr/bin/env node
/**
 * (Common) buildIsland.js
 * TypeScript と CommonJS / VanilaJS 混合プロジェクトにおいて、TypeScript のビルドエラーを抑制する。
 */
const argv = [ ].concat(process.argv);
while(argv.length && (argv[0] == 'b' || (/\/(node|npm|npx|yarn|b)$/).test(argv[0]))) argv.shift();
argv[0] = argv[0] || 'cmd/oips';
// console.log(process.argv, process.execArgv);
// console.log('=>', argv);
const pairs = { 
  black: 0, red: 1, green: 2, yellow: 100, blue: 4, magenta: 5, cyan: 6, white: 7, 
  pale: 69, gray: 242
};
const tx = { }, bg = { };
Object.keys(pairs).forEach(k=>{
  const n = pairs[k];
  tx[k] = s=>`\u001b[38;5;${n}m${s}\u001b[m`;
  bg[k] = s=>`\u001b[48;5;${n}m${s}\u001b[m`;
});
const cp = require('child_process').spawn('yarn', [ 'build' ], { 
  // 今後 ES Module で利用されることも考え、 file:// にも対応しておく。
  cwd: argv[0].charAt(0) == '/' ? argv[0]: argv[0].indexOf('://') != -1 ? `/${argv[0].split('://').pop()}`: `./${argv[0]}`, 
  stdio: ['pipe', 'pipe', 'pipe']
});
cp.stdout.on('data', buf=>console.log(buf.toString()));
cp.stderr.on('data', buf=>console.log(tx.yellow(buf.toString())));
// https://qiita.com/ko1nksm/items/095bdb8f0eca6d327233
// # 256色を表示するワンライナー
// # seq 0 255 | xargs -I {} printf '\033[38;5;{}m{}\033[m '
// \033 = \u001b = 27

