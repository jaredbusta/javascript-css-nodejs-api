const http = require("http"); // librerias html para crear servidores web con node.js
// crea el servidor. 
// param es la funcion que le permite al servidor existir
let servidor = http.createServer(sitioweb); 


function sitioweb(request,result){ 
    result.writeHead(200, {"Content-type": "text/html"}); // header de la pagina
    result.end('index.html');
}

// servidor.listen(8089,"127.0.0.1"); // puerto de escucha 
// servidor.listen(8089,"localhost"); // puerto de escucha 
servidor.listen(8089,"192.168.1.144"); // puerto de escucha 
console.log("Servidor corriendo en el puerto 8089 remoto"); // mensaje en terminal
