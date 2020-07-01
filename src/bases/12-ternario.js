const activo = true;

// let mensaje = "";

// if (activo) {
// 	mensaje = "Activo";
// } else {
// 	mensaje = "Inactivo";
// }

const mensaje = (activo) ? "activo" : "Inactivo";

// const mensaje = (activo) ? "activo" : null;
const mensaje2 = !activo && 'Activo';

console.log(mensaje2);
