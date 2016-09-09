var filename = process.argv[2];

var fs = require("fs");
var zlib = require("zlib");

var readStream = fs.createReadStream(filename);

readStream.on('error',function(){console.log("read file error!")});

var writeStream = fs.createWriteStream(filename+".gz");

startZip = function startZip()
{
console.log("start zip!");
readStream.pipe(zlib.createGzip()).pipe(writeStream);
}

readStream.once('readable',startZip);
writeStream.on('finish',function(){console.log(">>> "+filename+".gz")});
console.log("---");
