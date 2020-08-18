const path      = require('path');
const fs        = require('fs');
const exec      = require('child_process').exec;

const apcaccess = require(path.join(__dirname, '..'));

apcaccess().then((data) => {
  exec('apcaccess', function(err, stdout, stderror) {
    var name = data.model.split(" ").join("_").split('-').join("_").toLowerCase();
    var nameUsed = name;
    
    var index = 0;
    var examples = path.join(__dirname, '..', 'test', 'examples');
    console.log(examples);
    var file = path.join(examples, name);
    
    while(fs.existsSync(file) == true) {
      index ++;
      nameUsed = [name, index].join('.')
      file = path.join(examples, nameUsed);
      console.log(file);
    }

    console.log("");
    console.log(nameUsed);
    console.log("");

    fs.writeFile(file, stdout.toString(), () => {
      process.exit(0);
    })
  })
})

