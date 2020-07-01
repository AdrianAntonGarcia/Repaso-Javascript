const personajes = ["Goku", "Vegeta", "Trunks"];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

const [p1] = personajes;
// Si solo queremos el segundo elemento
const [, p2] = personajes;
// Si solo queremos el tercer elemento
const [, , p3] = personajes;

console.log(p1);
console.log(p2);
console.log(p3);

const retornaArreglo = () => {
	return ["ABC", 1234];
};

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

const useState = (valor) => {
	return [
		valor,
		() => {
			console.log("Hola Mundo");
		},
	];
};

const [nombre, setNombre] = useState("Goku");

console.log(nombre);
setNombre();
