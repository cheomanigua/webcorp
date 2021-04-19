
// Calculate profit

function calculateRevenue() {
  let inversion = document.getElementById("inversion").value;
  let precioCompra = document.getElementById("precioCompra").value;
  let precioVenta = document.getElementById("precioVenta").value;
  let ingresos = (inversion/precioCompra) * precioVenta
  let comision = 0.075
  let fees = ingresos * comision / 100
  let beneficios =  ingresos - inversion - fees;
  let rentabilidad = (beneficios/inversion) * 100
  document.getElementById("ingresos").innerHTML = "Ingresos: " + ingresos.toFixed(2);
  document.getElementById("fees").innerHTML = "Fees*: " + fees.toFixed(2);
  document.getElementById("beneficios").innerHTML = "Beneficio: " + beneficios.toFixed(2);
  document.getElementById("rentabilidad").innerHTML = "Rentabilidad: " + rentabilidad.toFixed(2) + "%";
  document.getElementById("comision").innerHTML = "* La comisión de Binance es de un " + comision.toString() + "% de los ingresos totales por transacción";
  }



  
