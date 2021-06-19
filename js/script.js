function mostrarNombre(pais, probabilidad){
    var mensaje =`
        Country:  ` + pais +  
        `<br>Probability: ` + parseFloat((probabilidad * 100)).toFixed(2) + ' %'
        ;
    document.getElementById("mensaje").innerHTML = mensaje;
}

async function traerPais(_nombre){ // funcion asincrona
    const respuesta = await fetch("https://api.nationalize.io/?name="+ _nombre);  // await espera una primise y continua hasta que termine la ejecucion de esta linea
    if(!respuesta.ok){ // envia una excepcion en caso de que el 
        var err = "Pagina no encontrada ";
        alert(err);
        throw new Error(err);
    }
    const nombre = respuesta.json();
    return nombre;
}

async function country_codeToCountry(code){
    const resp = await fetch("https://restcountries.eu/rest/v2/alpha?codes="+ code);
    if(!resp.ok){
        var err = "Pagina no encontrada ";
        alert(err);
        throw new Error(err);
    }
    const pais = resp.json();
    return pais;
}

async function consultar(){
    document.getElementById('mensaje').innerHTML= "";
    let nombre = document.getElementById("txt_nombre").value; //obtiene el valor del DOM txt_nombre
    let country_code = await traerPais(nombre);
    var data  = country_code.country[0];
    var pais ="No encontrado.";
    var probabilidad =0;
    if(data != undefined){
        _pais = await country_codeToCountry(data.country_id);
        pais = _pais[0].name + " - " + data.country_id ;
        probabilidad = data.probability;
    }
    mostrarNombre(pais, probabilidad);
}