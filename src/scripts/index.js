const fs = require('fs');
console.log('======================postinstall=======================');

// 安装 zw-demi 时，会自动执行 postinstall脚本，然后执行这个文件，
// 然后../ lib / index.js 中会有 'hello world' 内容
const dir = path.resolve(__dirname, '..', 'lib');
const dest = path.join(dir, 'index.js');
const content = `"hello world"`;
fs.writeFileSync(dest, content, 'utf-8');
