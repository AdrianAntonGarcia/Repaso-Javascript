// const getImagenPromesa = () =>
// 	new Promise((resolve) => resolve("https://jadjksadsa.com"));
// getImagenPromesa().then(console.log);

/**
 * El async hace que lo que devuelve la función sea una promesa, ahorrando líneas
 * como vemos con  el comentario anterior.
 * Nos permite poner el await
 */
const getImagen = async () => {
	try {
		const apiKey = "bvg9SK9DxVxC7lr5cR0rRoDqPEDbasWf";
		// Esperamos a que la promesa termine
		const respuesta = await fetch(
			`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
		);
		const { data } = await respuesta.json();
		const { url } = data.images.original;
		const img = document.createElement("img");
		img.src = url;
		document.body.append(img);
	} catch (error) {
		console.error(error);
	}
};
getImagen();

// const apiKey = "bvg9SK9DxVxC7lr5cR0rRoDqPEDbasWf";

// const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// // Promesas en cadenas, el catch atrapa a todos, también se puede hacer de forma individual
// peticion
// 	.then((resp) => resp.json())
// 	.then(({ data }) => {
// 		const { url } = data.images.original;

// 		const img = document.createElement('img');
// 		img.src = url;
// 		document.body.append(img);
// 	})
// 	.catch(console.warn);
