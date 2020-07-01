const apiKey = "bvg9SK9DxVxC7lr5cR0rRoDqPEDbasWf";

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// Promesas en cadenas, el catch atrapa a todos, también se puede hacer de forma individual
peticion
	.then((resp) => resp.json())
	.then(({ data }) => {
		const { url } = data.images.original;
		
		const img = document.createElement('img');
		img.src = url;
		document.body.append(img);
	})
	.catch(console.warn);
