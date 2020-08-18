var processors = [
  { name: 'upsname' }, 
  { name: 'date',      type: 'datetime' }, 
  { name: 'hostname' }, 
  { name: 'version' },
  { name: 'cable' },
  { name: 'driver' },
  { name: 'upsmode' },
  { name: 'starttime', type: 'datetime'},
  { name: 'model' },
  { name: 'serialno' }, 
  { name: 'status' }, 
  { name: 'linev',     type: 'voltage'}, 
  { name:'linefreq' }, 
  { name: 'loadpct',   type: 'percentage' }, 
  { name: 'battv',     type: 'voltage' }, 
  { name: 'bcharge',   type: 'percentage' },
  { name: 'timeleft',  type: 'time_remaining' },
  { name: 'mbattchg',  type: 'percentage'},
  { name: 'mintimel',  type: 'time_remaining'},
  { name: 'maxtime',   type: 'time_remaining' },
  { name: 'sense' },
  { name: 'lotrans',   type: 'voltage' },
  { name: 'hitrans',   type: 'voltage' },
  { name: 'alarmdel',  type: 'time_remaining' },
  { name: 'selftest' },
  { name: 'battdate',  type: 'datetime' },
  { name: 'nominv',    type: 'voltage' },
  { name: 'nombattv',  type: 'voltage' },
  { name: 'nompower',  type: "power" },
  { name: 'firmware' },
  { name: 'end_apc',   type: 'datetime' }
];

module.exports.names = () => {
  return processors.map((p) => { return p.name });
}

var find = (options) => {
  return processors.filter((entry) => {
    return Object.keys(options).map((k) => {
      return options[k] == entry.name;
    }).indexOf(true) == 0;
  })[0]
}

module.exports.find = find;

module.exports.type = (name) => {
  return find({name: name}).type;
}
