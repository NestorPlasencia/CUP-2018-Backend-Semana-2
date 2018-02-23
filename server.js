var fs = require('fs');
var argv = require('yargs').argv;
var contact = require('./contact.js');

var operation  = argv._[0]; 

if (operation == "add") {
	var name = argv.name;
	var number = argv.number;
	contact.addContact(name,number)	
}

if (operation == "list") {
	contact.listContact()	
}

if (operation == "read") {
	var name = argv.name;
	contact.readContact(name)	
}

if (operation == "remove") {
	var name = argv.name;
	contact.deleteContact(name)	
}