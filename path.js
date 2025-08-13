const path = require('path');



const filePath = path.join('/public', 'images','dist','routes.ts'); // join sirve para unir rutas
console.log(filePath);
console.log(path.basename(filePath)) // esto sirve para obtener el nombre del archivo
console.log(path.dirname(filePath)) // esto sirve para obtener el directorio del archivo
console.log(path.parse(filePath)) // esto sirve para obtener la información del archivo
console.log(path.extname(filePath)) // esto sirve para obtener la extensión del archivo
console.log(path.resolve('dist')) // esto sirve para resolver la ruta absoluta  