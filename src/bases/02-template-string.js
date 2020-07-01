const nombre = "Adrián";
const apellido = "Antón";

const nombreCompleto = `${nombre} ${apellido} ${1 + 1}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
	return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);
