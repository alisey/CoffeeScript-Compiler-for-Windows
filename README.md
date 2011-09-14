This is a standalone executable allowing you to compile [CoffeeScript](http://coffeescript.org/) files on Windows.  
Download coffee.exe to your Windows directory (or any other directory in your %PATH%)

###Usage
Same as the original coffee command:

    -c, --compile       compile to JavaScript and save as .js files
    -o, --output [DIR]  set the directory for compiled JavaScript
    -j, --join [FILE]   concatenate the scripts before compiling
    -b, --bare          compile without the top-level function wrapper
    -v, --version       display CoffeeScript version
    -h, --help          display a list of available options

If you specify a directory as a source, all .coffee files in that directory will be compiled recursively.

###Updating CoffeeScript
* Download latest [coffee-script.js](https://raw.github.com/jashkenas/coffee-script/master/extras/coffee-script.js) to the same directory as coffee.exe
* Check version: coffee --version

###Better solution
* Download Node.js executable for Windows: http://nodejs.org/#download
* Download CoffeeScript: http://github.com/jashkenas/coffee-script/tarball/master
* Create coffee.cmd in your Windows directory:

        @echo off
        "%PROGRAMFILES%/Node/node.exe" "%PROGRAMFILES%/CoffeeScript/bin/coffee" %*