load('options.js');
load('coffee-script.js') || load('coffee-script-builtin.js');

var SWITCHES = [
    ['c', 'compile', '',  "compile to JavaScript and save as .js files"],
    ['o', 'output',  ':', "set the directory for compiled JavaScript", "[DIR]"],
    ['j', 'join',    ':', "concatenate the scripts before compiling", "[FILE]"],
    ['b', 'bare',    '',  "compile without the top-level function wrapper"],
    ['v', 'version', '',  "display CoffeeScript version"]
];

try {
    main();
} catch(e) {
    writeln(e);
}

function main() {
    var params = parseOptions(SWITCHES, system.arguments);
    if (!params) return;
    var options = params.options;
    var sources = params.arguments;
    
    if (options.version) {
        writeln("CoffeeScript version " + CoffeeScript.VERSION);
        return;
    }
    
    if (options.compile && sources) {
        var files = sources.reduce(function(files, source) {
            return files.concat(filesFromSource(source));
        }, []);
        
        options.join ? compileJoin(files, options)
                     : compileFiles(files, options);
    }
}

function normalizePath(path) {
    return path.replace(/[\\\/]+/g, '/').replace(/\/$/, '');
}

function fileExists(path) {
    return !!system.attributes(path);
}

function fileGetContents(path) {
    return (new Stream(path, 'rb')).readFile();
}

function filePutContents(path, contents) {
    return (new Stream(path, 'wb')).write(contents);
}

function isDirectory(path) {
    return /directory/.test(system.attributes(path).attributes);
}

function joinPath() {
    return [].filter.call(arguments, function(x) {return x}).join('/');
}

function pathInfo(path) {
    var pathParts = path.split('/');
    var filename = pathParts.pop();
    var dirname = pathParts.join('/');
    var filenameParts = filename.split('.');
    var extname = filenameParts.length > 1 ? filenameParts.pop() : '';
    var basename = filenameParts.join('.');

    return {
        dirname: dirname,
        filename: filename,
        basename: basename,
        extname: extname
    };
}

function recursiveDirectoryListing (dir, fileMask) {
    var files = system.files(dir + '/'+ fileMask);
    var subdirs = system.folders(dir + '/*');
    
    return subdirs.map(function(subdir) {
                return recursiveDirectoryListing(dir + '/' + subdir, fileMask)
                       .map(function(file) { return subdir + '/' + file })})
           .reduce(function(s, i) { return s.concat(i) }, files);
}

function filesFromSource(source) {
    source = normalizePath(source);

    if (!fileExists(source)) {
        throw "File not found: " + source;
    }

    if (isDirectory(source)) {
        var root = source;
        var files = recursiveDirectoryListing(source, '*.coffee');
    } else {
        var root = pathInfo(source).dirname;
        var files = [pathInfo(source).filename];
    }

    return files.map(function(file) {
        var path = pathInfo(file);
        path.root = root;
        return path;
    });
}

function compileFiles(files, options) {
    files.map(function(f) {
        var inputFile = joinPath(f.root, f.dirname, f.filename);
        var coffeeSource = fileGetContents(inputFile);
        var jsSource = CoffeeScript.compile(coffeeSource, {bare: !!options.bare});
        var outputDir = joinPath(options.output || f.root, f.dirname);
        var outputFile = joinPath(outputDir, f.basename + '.js');
        system.mkdir(outputDir);
        filePutContents(outputFile, jsSource);
    });
}

function compileJoin(files, options) {
    var coffeeSource = files.reduce(function(all, f) {
        var srcPath = joinPath(f.root, f.dirname, f.filename);
        return all + "\n" + fileGetContents(srcPath);
    }, '');
    var jsSource = CoffeeScript.compile(coffeeSource, {bare: !!options.bare});
    system.mkdir(pathInfo(options.join).dirname);
    filePutContents(options.join, jsSource);
}

function pp(x) {
    for (var i in x) {
       writeln(i + ': ' + x[i]);
    }
}