alert("Bienvenido a cinemania, te pido que completes los siguientes datos")

let usuario = prompt("Ingrese su nombre de usuario")
let contrasenia = prompt("Ingrese alguna contraseña para continuar")
console.log("Usuario " + usuario + " Contraseña " + contrasenia)


let peliculaVerdadera = false;

if (usuario != "" && contrasenia != "") {
    alert("Registrado exitosamente")

    let peliculas = prompt("Estas son algunas de las películas que tenemos disponibles en nuestra cartelera, escriba la que desea ver:\nSaw X\nLos indestructibles 4\nLa monja II\nLas tortugas ninjas\nOppenheimer");

    switch (peliculas) {
        case "saw x" && "Saw x":
            alert("Usted eligió Saw X");
            peliculaVerdadera = true;
            break;
        case "los indestructibles 4" && "Los indestructibles 4":
            alert("Usted eligió Los indestructibles 4");
            peliculaVerdadera = true;
            break;
        case "la monja ii" && "La monja 2":
            alert("Usted eligió La monja II");
            peliculaVerdadera = true;
            break;
        case "las tortugas ninjas" && "Las tortugas ninjas":
            alert("Usted eligió Las tortugas ninjas");
            peliculaVerdadera = true;
            break;
        case "oppenheimer" && "Oppenheimer":
            alert("Usted eligió Oppenheimer");
            peliculaVerdadera = true;
            break;
    }

    if (peliculaVerdadera) {
        let dia = prompt("Seleccione un día de la semana");
        let hora = prompt("Ingrese un horario adecuado")

        if (dia + hora) {
            alert("Usted eligió el día " + dia + " y la hora " + hora);
        } else {
            alert("Debe elegir algún día");
        }
        let aceptarcambios

        do {
            aceptarcambios = prompt("Esta seguro que desea sacar sus entradas? (si/no)")
        }
        while (aceptarcambios != "si" && aceptarcambios != "no")


        if (aceptarcambios == "si") {
            alert("Perfecto " + usuario + "! Verás la película de " + peliculas + " el día " + dia + " a las " + hora + ". Que disfrutes mucho tu pelicula!");
        } else {
            alert("Hasta luego")
        }

    } else {
        alert("Esa película no se encuentra disponible, vuelva a intentarlo");
    }
} else {
    alert("Debes rellenar alguno de los campos para continuar");
}