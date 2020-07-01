const persona = {
	nombre: "Tony",
	apellido: "Stark",
	edad: 45,
	direccion: {
		ciudad: "New York",
		zip: 316463,
		lat: 14.234324,
		lng: 34.123233,
	},
};

// MOLA
console.table({ persona });

// Estamos pasandolo por referenciaaaaaa!!!
const persona2 = persona;

// Spread, aquí creamos un nuevo objeto y le asignamos las mismas propiedades
const persona3 = { ...persona };
console.log(persona2);
console.log(persona3);
