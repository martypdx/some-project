var cool = require( 'cool-ascii-faces' );
var pets = require( './pets' );

console.log( pets.getPets( { allowDogs: true } ) );
console.log( 'hello ' + cool() );