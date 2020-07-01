// Desestructuración

const persona = {
	nombre: "Tony",
	edad: 45,
	clave: "Ironman",
	rango: "Soldado",
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

// Se puede renombrar la variable que queremos crear
// No tiene porque estar ordenado
const { edad: años, clave, nombre } = persona;

console.log(nombre, años, clave);

// Desestructuración en los argumentos
// Valor por defecto si no viene
const useContext = ({ edad: años, clave, nombre, rango = "Capitan" }) => {
	console.log(nombre, años, clave, rango);

	return {
		nombreClave: clave,
		anios: años,
		latlng: {
			lat: 14.21312,
			lng: 13.13234,
		},
	};
};

// retornaPersona(persona);

// Desestructuración dentro de desestructuración
const {
	nombreClave,
	anios,
	latlng: { lat: lt, lng },
} = useContext(persona);

console.log(nombreClave, anios);
console.log(lt, lng);
