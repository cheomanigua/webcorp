
// Calculate profit

function calculateRevenue() {
  let inversion = document.getElementById("inversion").value;
  let precioCompra = document.getElementById("precioCompra").value;
  let precioVenta = document.getElementById("precioVenta").value;
  let ingresos = (inversion/precioCompra) * precioVenta

  let comision = 0
  let fees = ingresos * comision / 100
  let beneficios =  ingresos - inversion - fees;
  let rentabilidad = (beneficios/inversion) * 100

  let comision_binance = 0.2
  let fees_binance = ingresos * comision_binance / 100
  let beneficios_binance =  ingresos - inversion - fees_binance;
  let rentabilidad_binance = (beneficios_binance/inversion) * 100

  let comision_coinbase = 0.50
  let fees_coinbase = ingresos * comision_coinbase / 100
  let beneficios_coinbase = ingresos - inversion - fees_coinbase
  let rentabilidad_coinbase = (beneficios_coinbase/inversion) * 100

  document.getElementById("ingresos").innerHTML = "Ingresos: " + ingresos.toFixed(2);
  document.getElementById("fees").innerHTML = "Fees: " + fees.toFixed(2);
  document.getElementById("beneficios").innerHTML = "Beneficio: " + beneficios.toFixed(2);
  document.getElementById("rentabilidad").innerHTML = "Rentabilidad: " + rentabilidad.toFixed(2) + "%";
  // document.getElementById("comision").innerHTML = "* Sin comisión " + comision.toString() + "%";

  document.getElementById("ingresos_binance").innerHTML = "Ingresos: " + ingresos.toFixed(2);
  document.getElementById("fees_binance").innerHTML = "Fees*: " + fees_binance.toFixed(2);
  document.getElementById("beneficios_binance").innerHTML = "Beneficio: " + beneficios_binance.toFixed(2);
  document.getElementById("rentabilidad_binance").innerHTML = "Rentabilidad: " + rentabilidad_binance.toFixed(2) + "%";
  document.getElementById("comision_binance").innerHTML = "* La comisión de Binance es de un " + comision_binance.toString() + "%";

  document.getElementById("ingresos_coinbase").innerHTML = "Ingresos: " + ingresos.toFixed(2);
  document.getElementById("fees_coinbase").innerHTML = "Fees**: " + fees_coinbase.toFixed(2);
  document.getElementById("beneficios_coinbase").innerHTML = "Beneficio: " + beneficios_coinbase.toFixed(2);
  document.getElementById("rentabilidad_coinbase").innerHTML = "Rentabilidad: " + rentabilidad_coinbase.toFixed(2) + "%";
  document.getElementById("comision_coinbase").innerHTML = "** La comisión de Coinbase Pro es de un " + comision_coinbase.toString() + "%";
  }


function calculateTakeProfitStopLoss() {

  let buy = document.getElementById("precioCompra").value;
  let sell = document.getElementById("precioVenta").value;
  let porcentajetakeprofit = document.getElementById("porcentajetakeprofit").value
  let porcentajestoploss = document.getElementById("porcentajestoploss").value
  
  let takeprofitbuy = 1 * buy + buy * (porcentajetakeprofit/100)
  let takeprofitsell = 1 * sell - sell * (porcentajetakeprofit/100)

  let stoplossbuy = buy - buy * (porcentajestoploss/100)
  let stoplosssell = 1 * sell + sell * (porcentajestoploss/100)

  document.getElementById("takeprofitbuy").innerHTML = "Take profit en largo: " + takeprofitbuy.toFixed(4);
  document.getElementById("takeprofitsell").innerHTML = "Take profit en corto: " + takeprofitsell.toFixed(4);
  document.getElementById("stoplossbuy").innerHTML = "Stop loss en largo: " + stoplossbuy.toFixed(4);
  document.getElementById("stoplosssell").innerHTML = "Stop loss en corto: " + stoplosssell.toFixed(4);
}

// Compount interest calculator

function calculateInterest() {
  let inversion = parseFloat(document.getElementById("inversion").value);
  let inversion_tax = inversion;
  let interes = parseFloat(document.getElementById("interes").value);
  let meses = document.getElementById("meses").value;
  let anos = document.getElementById("anos").value;
  let resultado = 0.0;
  let resultado_sin_impuestos = 0.0;
  let resultado_con_impuestos = 0.0;

  resultado_sin_impuestos = ((1 + ((interes/100))) ** (meses * anos)) * inversion

  for (let i = 0 ; i < anos ; i++) {
    resultado = ((1 + ((interes/100))) ** meses) * inversion_tax
    resultado_con_impuestos = inversion_tax + ((resultado - inversion_tax)*.79)
    inversion_tax = resultado_con_impuestos;
    console.log(i + " " + inversion_tax)
  }

  document.getElementById("resultado_sin_impuestos").innerHTML = "Total sin impuestos: " + resultado_sin_impuestos.toFixed(0);
  document.getElementById("resultado_con_impuestos").innerHTML = "Total con impuestos: " + resultado_con_impuestos.toFixed(0);

}