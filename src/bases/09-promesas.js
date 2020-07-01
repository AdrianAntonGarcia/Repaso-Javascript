import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		const p2 = getHeroeById(2);
// 		// console.log(heroe);
// 		resolve(p2);
// 		// reject('No se pudo encontrar el heroe');
// 	}, 2000);
// });

// promesa.then((heroe) => {
// 	console.log("Then de la promesa", heroe);
// })
// .catch((err)=>{
// 	console.warn(err);
// });

const getHeroeByIdAsync = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const p = getHeroeById(id);
			// console.log(heroe);
			if (!p) {
				reject("No se pudo encontrar el heroe");
			} else {
				resolve(p);
			}
			// reject('No se pudo encontrar el heroe');
		}, 2000);
	});

	// return promesa;
};

getHeroeByIdAsync(2)
	// .then((heroe) => console.log("heroe", heroe))
	// .catch((err) => console.warn(err));
	// Coge lo que venga de parámetro y lo direcciona directamente al clg
	.then(console.log)
	.catch(console.warn);

