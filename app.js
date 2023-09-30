let hora = prompt("Ingrese la hora de su pais")
let nombredeUsuario = prompt("Ingrese su nombre de usuario")

/* if (hora >= 6 && hora < 12) {
    alert("Buenos dias! " + nombredeUsuario + " ha ingresado correctamente a nuestro sitio web")
} else if (hora >= 12 && hora < 19) {
    alert("Buenas tardes! " + nombredeUsuario + " ha ingresado correctamente a nuestro sitio web")
} else if (hora >= 19 && hora < 6) {
    alert("Buenas noches! " + nombredeUsuario + " ha ingresado correctamente a nuestro sitio web")
} else (
    alert("Debe colocar campos validos para ingresar")
)  */

while (hora >= 6 && hora < 12) {
    alert("Buenos dias!")
    hora++
}