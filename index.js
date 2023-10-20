/**
 * [build-island](index.js) Interface of build-island
 * require('build-island').run( );
 */
module.exports = { run };
async function run(argv) {
  return new Promise((rsl, rej)=>{
    require('child_process').execFile('./bin/buildIsland.js', argv || process.argv.slice(2), { }, (er, stdout, stderr)=>{
      er ? rej(er): rsl({ stdout, stderr });
    });
  });
}
