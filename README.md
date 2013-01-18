###This compiler is obsolete
Instead, use these simple official installation steps:

1. Download and run [Node.js installer](http://nodejs.org/download/).
2. Run on the command line: `npm install -g coffee-script`
3. That's all. You can now run `coffee` from any directory.

---
### Old description
This is a standalone [CoffeeScript](http://coffeescript.org/) compiler for Windows. Download coffee.exe to your Windows directory, or add it to your %PATH%. Usage is identical to the original `coffee` command, except that `--watch` is not supported:

    -c, --compile       compile to JavaScript and save as .js files
    -o, --output [DIR]  set the directory for compiled JavaScript
    -j, --join [FILE]   concatenate the scripts before compiling
    -b, --bare          compile without the top-level function wrapper
    -v, --version       display CoffeeScript version
    -h, --help          display a list of available options

If a directory is specified as a source, all .coffee files in that directory will be compiled recursively.

To update CoffeeScript:
* Download latest [coffee-script.js](https://raw.github.com/jashkenas/coffee-script/master/extras/coffee-script.js) to the same directory as coffee.exe
* Check version: coffee --version
