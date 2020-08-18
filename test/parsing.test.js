var path     = require('path')
var fs       = require('fs');
var assert   = require('assert');

var parser   = require(path.join(__dirname, '..','lib','parser'));

describe('apcaccess', function() {

  [{ 
      name: 'BackUPS Pro 1000',
      file:'back_ups_rs1000g', 
      linev: 121, 
      date: "2020-08-18 10:33:44 -0500", 
      loadpct: 65, 
      nompower: 600, 
      mintimel: 180, 
      alarmdel: 30
  
  }].forEach((example) => {
    
    var output = fs.readFileSync(path.join(__dirname, 'examples', example.file)).toString();
    
    describe(example.name, function() {

      if (example.linev != undefined) {
        it('should parse voltage', function(done) {
          var result = parser(output);
          assert.equal(result.linev, example.linev);
          done();
        })
      }

      if (example.date != undefined) {
        it('should parse date', function(done) {
          var result = parser(output);
          var exampleDate = new Date(example.date)
          assert.equal(result.date.getTime(), exampleDate.getTime());
          done();
        })
      }

      if (example.loadpct != undefined) {
        it('should parse percentage', function(done) {
          var result = parser(output);
          assert.equal(result.loadpct, example.loadpct);
          done();
        })
      }
      
      if (example.nompower) {
        it('should parse power', function(done) {
          var result = parser(output);
          assert.equal(result.nompower, example.nompower);
          done();
        })
      }

      describe('time remaining', function() {
        xit('days');
        xit('hours');

        it('minutes', function(done) {
          var result = parser(output);
          assert.equal(result.mintimel, example.mintimel);
          done();

        });

        it('seconds', function(done) {
          var result = parser(output);
          assert.equal(result.alarmdel, example.alarmdel);
          done();
        });

      });
    });
  });

});

  
