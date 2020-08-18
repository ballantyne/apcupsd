const path     = require('path');
var processors = require(path.join(__dirname, 'processors'));

var understandTimeRemaining = (string) => {
  var parsed = string.match(/(\d+)\s(.+)/)
  var number = parsed[1];
  var unit   = parsed[2];
  
  switch(unit) {
    case "Seconds": 
      return parseInt(number);
    case "Minutes":
      return parseInt(number * 60);
   case "Hours":
      return parseInt(number * 60 * 60);
   case "Days":
      return parseInt(number * 60 * 60 * 24);
  }
}


var process = (type, value) => {
 switch(type) {
    case 'time_remaining':
      return understandTimeRemaining(value);
    case "datetime":
      return new Date(value);       
    case "power":
      return parseFloat(value.replace(" Watts", ''));       
    case "voltage":
      return parseFloat(value.replace(" Volts", ''));       
    case "percentage":
      return parseFloat(value.replace(" Percent", ''));     
    default:
      return value;
  }
}

var parseValue = (name, value) => {
  var processor = processors.find({name: name});
  if (processor.type != undefined) {
    return process(processor.type, value);
  } else {
    return value;
  }
}

module.exports = (output) => {
  var headers    = processors.names();
  var entries    = output.trim().split("\n");

  return entries.reduce(function (data, entry) {
    var parts    = entry.split(' : ').map((part) => { return part.trim() });
    var name     = parts[0].toLowerCase().split(' ').join('_');
    var value    = parts[1];

    if (headers.indexOf(name) > -1) {
      data[name] = parseValue(name, value);
    }
    return data; 
  }, {});
}

