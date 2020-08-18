apcupsd
============

Node.js wrapper for apcaccess from apcupsd

This module has lots of inspiration from Ron Klinkien.  I think that most of the code is changed so that it isn't really the same as the app he published (https://github.com/cyberjunky/node-apcupsd/blob/master/app.js).  I took his idea of parsing the output from apcaccess and added the additional step of parsing the values so that they are useful to a machine and I removed the MQTT broker because I was just trying to make a module for the apcupsd.  So maybe he will find this module useful in the app that he made.

The module is just a promise that returns a object. 

I added a license.  If Ron wants me to list his name in there too, I am ok to add him to the license, but I don't think that any of the code is the same. 
