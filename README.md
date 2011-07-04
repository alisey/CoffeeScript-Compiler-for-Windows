CoffeeScript Compiler for MS Windows. To learn what CoffeeScript is visit [CoffeeScript website](http://coffeescript.org). This compiler is best for trying things out, for serious use consider installing [Node.js on Cygwin](https://github.com/joyent/node/wiki/Building-node.js-on-Cygwin-%28Windows%29) or using [ExecJS](https://github.com/sstephenson/execjs) gem.

###Installation
Download coffee.exe to %WINDIR% or add it's path to %PATH% environment variable.

###Usage
Same as the original coffee command described at [CoffeeScript website](http://coffeescript.org/), but with a limited number of options:

    -c, --compile       compile to JavaScript and save as .js files
    -o, --output [DIR]  set the directory for compiled JavaScript
    -j, --join [FILE]   concatenate the scripts before compiling
    -b, --bare          compile without the top-level function wrapper
    -v, --version       display CoffeeScript version
    -h, --help          display a list of available options

You can provide a directory as a source and all .coffee files in that directory will be compiled recursively. Unfortunately JSDB used internally by this compiler cannot output to stderr. All errors are logged to stdout.

###Updating to latest version of CoffeeScript
Download https://raw.github.com/jashkenas/coffee-script/master/extras/coffee-script.js to the same directory as coffee.exe
Check version by running: coffee --version