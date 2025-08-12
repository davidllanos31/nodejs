const os = require('os')

os.userInfo
console.log(os.userInfo());
console.log(os.uptime());
console.log(os.platform());
console.log(os.totalmem());
console.log(os.freemem());

console.table({
    "Usuario": os.userInfo().username,
    "Tiempo de actividad": os.uptime(),
    "Plataforma": os.platform(),
    "Memoria total": os.totalmem(),
    "Memoria libre": os.freemem()
});