LoadModule('jsstd');
LoadModule('jsio');

var thisDir = arguments[0].replace(/[^\\/]+$/, '');
var srcFile = arguments[1];
var dstFile = arguments[2];

Exec(thisDir + 'coffee-script.js');

(dstFile ?
  new File(dstFile).Open(File.WRONLY | File.CREATE_FILE | File.TRUNCATE) :
  File.stdout)

.Write(
  CoffeeScript.compile(
    new File(srcFile).content,
    {noWrap: false}));