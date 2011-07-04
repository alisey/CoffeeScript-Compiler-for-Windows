CoffeeScript Compiler for MS Windows. To learn about CoffeeScript visit [coffeescript.org](http://coffeescript.org). This compiler is OK for trying things out, but for serious use consider installing [Node.js on Cygwin](https://github.com/joyent/node/wiki/Building-node.js-on-Cygwin-%28Windows%29) or using [ExecJS](https://github.com/sstephenson/execjs) gem.

###Installation
Download coffee.exe to %WINDIR% or add it's path to %PATH% environment variable.

###Usage
Same as the original coffee command described at [coffeescript.org](http://coffeescript.org/), but with a limited number of options:

    -c, --compile       compile to JavaScript and save as .js files
    -o, --output [DIR]  set the directory for compiled JavaScript
    -j, --join [FILE]   concatenate the scripts before compiling
    -b, --bare          compile without the top-level function wrapper
    -v, --version       display CoffeeScript version
    -h, --help          display a list of available options

If a directory is provided as a source, all .coffee files in that directory will be compiled recursively. Unfortunately, JavaScript runtime used by this compiler (JSDB) cannot output to stderr. All errors are logged to stdout.

###Updating to latest version of CoffeeScript
Download https://raw.github.com/jashkenas/coffee-script/master/extras/coffee-script.js to the same directory as coffee.exe and 
check version by running: coffee --version