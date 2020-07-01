// import { heroes } from "./data/heroes";

// import herArr, { owners } from "../data/heroes";

import herArr from '../data/heroes';		

/**
 * El find devuelve el primer elemento que cumple la condición
 * @param {} id
 */
export const getHeroeById = (id) => {
	return herArr.find((heroe) => heroe.id === id);
};

// console.log(getHeroeById(2));

/**
 * El filter devuelve un array con todos los elementos que cumplen la condición
 * @param {*} owner
 */
export const getHeroesByOwner = (owner) =>
	herArr.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner("DC"));


// console.log(owners);