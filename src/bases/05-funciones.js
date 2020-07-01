// Funciones en js

// function saludar(nombre) {
// 	return `Hola ${nombre}`;
// }

const saludar = function (nombre) {
	return `Hola ${nombre}`;
};

// Ahora si intentamos cambiar el valor no nos va a dejar ya que la función es una constante

// saludar = 30;

// console.log(saludar("Goku"));

const saludarFlecha = (nombre) => {
	return `Hola ${nombre}`;
};

const saludarFlechaReturnImplicito = (nombre) => `Hola ${nombre}`;

console.log(saludar);
console.log(saludarFlecha("Vegeta"));
console.log(saludarFlechaReturnImplicito("Goku"));

const getUser = () => {
	return {
		uid: "ABC123",
		username: "El_Papi1502",
	};
};

// En este caso lo tenemos que envolver en parentesis para decirle que no es la respuesta no el objeto tal cual
const getUserImplicito = () => ({
	uid: "ABC123",
	username: "El_Papi1502",
});

console.log(getUser());
console.log(getUserImplicito());

function getUsuarioActivo(nombre) {
	return {
		uid: "ABC567",
		username: nombre,
	};
}

// Transformar a funcion de flecha
// Retornar objeto implícito

const getUsuarioActivoFlechaImplicito = (nombre) => ({
	uid: "ABC567",
	username: nombre,
});

const usuarioActivo = getUsuarioActivo("Adrian");

console.log(usuarioActivo);

const usuarioActivoFlechaImplicito = getUsuarioActivoFlechaImplicito("Adrian2");

console.log(usuarioActivoFlechaImplicito);