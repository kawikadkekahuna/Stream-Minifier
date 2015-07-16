// var parseArgs = require('minimist')
var fs = require('fs');
var util = require('util');
var argv = require('minimist')(process.argv.slice(2));
var Transform = require('stream').Transform;

var Method = {
  input: '--input',
  output: '--output'
}

var argv = argv['_'];
//validate
if (validateArgs(argv) === false) {
  console.log('invalid arguemnets');
  return;
}

var source = argv[1];
var destination = argv[3];


fs.exists('./'+source,function(exists){
  if(!exists){
    throw new Error('Unable to find requested file');
  }
});

var readable = fs.createReadStream(source, {
  flags: 'r',
  encoding: 'utf8',
  fd: null,
  mode: 0666,
  autoClose: true
});

var writeable = fs.createWriteStream('./output/'+destination, {
  flags: 'w',
  encoding: 'utf8',
  fd: null,
  mode: 0666,
  autoClose: true
});

var transformStream = function() {
  Transform.call(this, {
    objectMode: true
  });
}

util.inherits(transformStream, Transform);

transformStream.prototype._transform = function(chunk,encoding, callback) {
  var minifiedChunk = chunk.replace(/(\t|\r|\n|\s)+/g,'');
  this.push(minifiedChunk);
  callback();
};

var TransformStream = new transformStream();
readable.pipe(TransformStream).pipe(writeable);


function validateArgs(argv) {

  if (argv.indexOf(Method.input) || argv.indexOf(Method.output) >= 0) {
    return true;
  }
  return false;
}