// var parseArgs = require('minimist')
var fs = require('fs');
var util = require('util');
var argv = require('minimist')(process.argv.slice(2));
var Method = {
  input: '--input',
  output: '--output'
}
var ARGS = argv['_'];

if(validateArgs(ARGS) === false){
  console.log('invalid arguemnets');
  return;
}

console.log('here');

function validateArgs(ARGS) {

  if (ARGS.indexOf(Method.input) || ARGS.indexOf(Method.output) >= 0) {
    return true;
  }
  return false;
}