const carritoDeCompras = [];

function agregarAlCarrito() {
  const producto = prompt("Ingrese el nombre del producto:");
  const cantidad = parseInt(prompt("Ingrese la cantidad que desea llevar:"));
  const precio = parseFloat(prompt("Ingrese el precio del producto:"));

  if ((cantidad) && (precio)) {
    const item = {
      producto,
      cantidad,
      precio,
      subtotal: precio
    };
    carritoDeCompras.push(item);
    alert(`"${producto}" ha sido añadido al carrito.`);
  } else {
    alert("Ingrese una cantidad y precio.");
  }
}


function calcularTotal() {
  let total = 0;
  for (const item of carritoDeCompras) {
    total += item.subtotal;
  }
  return total;
}

function filtrarNombre(nombre) {
  return carritoDeCompras.filter(item => item.producto.toLowerCase().includes(nombre.toLowerCase()));
}

function buscarNombre(nombre) {
  return carritoDeCompras.find(item => item.producto.toLowerCase() === nombre.toLowerCase());
}

while (true) {
  const opcion = prompt("Seleccione una opción:\n1. Agregar producto al carrito\n2. Calcular total\n3. Filtrar productos\n4. Buscar producto\n5. Salir");

  switch (opcion) {
    case "1":
      agregarAlCarrito();
      break;
    case "2":
      alert(`Total de la compra: $${calcularTotal()}`);
      break;
    case "3":
      const nombre = prompt("Ingrese el nombre del producto a filtrar:");
      const productosFiltrados = filtrarNombre(nombre);
      alert("Productos filtrados:\n" + productosFiltrados.map(item => `${item.producto}: ${item.cantidad} x $${item.precio}`).join("\n"));
      break;
    case "4":
      const nombreBuscado = prompt("Ingrese el nombre del producto a buscar:");
      const productoBuscado = buscarNombre(nombreBuscado);
      if (productoBuscado) {
        alert(`Producto encontrado: ${productoBuscado.producto} - ${productoBuscado.cantidad} x $${productoBuscado.precio}`);
      } else {
        alert("Producto no encontrado.");
      }
      break;
    case "5":
      alert("Gracias por usar el carrito de compras.");
      break;
    default:
      alert("Opción no válida. Por favor, seleccione una opción válida.");
  }
}
