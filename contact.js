// contact.js

let fs = require('fs')
let contact_library = {
	addContact: function(name,number){
		fs.readFile('directorio.json','utf8',function (err, data) {
			if (err) {
				console.log("Se ha producido un error!!" + err)
			}else {
				if (!data) {
					let contacts = []
					contact = {}
					contact.name = name
					contact.number = number
					contacts.push(contact)
					fs.writeFile('directorio.json', JSON.stringify(contacts), function (err) {
						if (err)
							console.log(err)
						else
						    console.log("Contact created")
						    console.log( "--")
							console.log( "name: " + contact.name)
							console.log( "number: " + contact.number)
					})
				}else {
					let find = false
					contacts = 	JSON.parse(data)
					contacts.forEach(function(contact,ind) {
						if( contact.name == name ){
							contacts[ind].name = name
							contacts[ind].number = number
							find = true
							console.log("Contact updated")
						}
					})
					if (find == false) {
						contact = {}
						contact.name = name
						contact.number = number
						contacts.push(contact)
						console.log("Contact created")
					}
					fs.writeFile('directorio.json', JSON.stringify(contacts), function (err) {
						if (err)
							console.log(err)
						else
							console.log( "--")
							console.log( "name: " + name)
							console.log( "number: " + number)	
					})
					
				}
			}
		})	
	},
	readContact: function(name){
		
		fs.readFile('directorio.json','utf8',function (err, data) {
			if (err) {
				console.log("Se ha producido un error!!" + err)
			}else {
				if (!data) {
					console.log('La libreta no tiene contactos!')
				}else {
					let find = false
					contacts = 	JSON.parse(data)
					contacts.forEach(function(contact,ind) {
						if( contact.name == name ){
							console.log("Contact found")
							console.log( "--")
							console.log( "name: " + contact.name)
							console.log( "number: " + contact.number)
							find = true
						}
					})
					if (find == false) {
						console.log("El contacto "+ name +" no existe")
					}
				}
			}
		})	

	},
	listContact: function(){
		fs.readFile('directorio.json','utf8',function (err, data) {
			if (err) {
				console.log("Se ha producido un error!!" + err)
			}else {
				if (!data) {
					console.log('La libreta no tiene contactos!')
				}else {
					contacts = 	JSON.parse(data)
					console.log("Printing " + contacts.length + " contact(s)")
					contacts.forEach(function(contact,ind) {
						console.log( "--")
						console.log( "name: " + contact.name)
						console.log( "number: " + contact.number)
					})
				}
			}
		})	
	},
	deleteContact: function(name){
		fs.readFile('directorio.json','utf8',function (err, data) {
			if (err) {
				console.log("Se ha producido un error!!" + err)
			}else {
				if (!data) {
					console.log('La libreta no tiene contactos!')
				}else {
					let find = false
					contacts = 	JSON.parse(data)
					contacts.forEach(function(contact,ind) {
						if( contact.name == name ){
							let contactDeleted = contacts.splice(ind, 1)
							find = true
						}
					})
					if (find == false) {
						console.log("El contacto "+ name +" no existe")
					}else {
						fs.writeFile('directorio.json', JSON.stringify(contacts), function (err) {
							if (err)
								console.log(err)
							else
								console.log("Contact was removed")
						})	
					}					
				}
			}
		})
	}
}

module.exports = contact_library