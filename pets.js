var cats = [ 'felix', 'garfield', 'tom' ];
var dogs = [ 'benji', 'lassy', 'toto' ];

var pets = {
	getPets ( options ) {
		return options && options.allowDogs ? 
			cats.concat( dogs ) : 
			cats.slice() /*xyz*/;
	},
	feedPets(){
		
	}	
};

module.exports = pets;