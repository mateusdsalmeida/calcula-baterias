// Função para calcular
function calcular() {
  // Obtenha os valores dos campos de entrada
  var vrpedido = parseFloat(document.getElementById("vrpedido").value)
  var desconto = parseFloat(document.getElementById("desconto").value)
  var sucata = parseFloat(document.getElementById("sucata").value)
  var adicional = parseFloat(document.getElementById("adicional").value)

  // Verifique se os valores são válidos
  if (isNaN(vrpedido) || isNaN(desconto) || isNaN(sucata) || isNaN(adicional)) {
    alert("Por favor, insira valores válidos em todos os campos.")
    document.getElementById("vrpedido").focus()
    return
  }

  // Realize os cálculos
  var vrfinal =
    (vrpedido - (vrpedido * desconto) / 100) * (1 - adicional / 100) + sucata
  var descbase = ((vrpedido - vrfinal / (1 - adicional / 100)) / vrpedido) * 100
  var descfinal = (1 - vrfinal / vrpedido) * 100

  // Exiba os resultados
  var resultadoDiv = document.getElementById("resultado")
  resultadoDiv.innerHTML =
    "Valor Final: " +
    vrfinal.toFixed(2) +
    "<br>Desconto Base (%): " +
    descbase.toFixed(3) +
    "<br>Desconto Global (%): " +
    descfinal.toFixed(3)
}

// Função para limpar os campos
function limparCampos() {
  var campos = ["vrpedido", "desconto", "sucata", "adicional"]
  campos.forEach(function (campo) {
    document.getElementById(campo).value = ""
  })
  document.getElementById("adicional").value = "3"
  //document.getElementById("calcularBtn").disabled = false;
  document.getElementById("resultado").innerHTML = ""

  // Defina o foco no primeiro campo (vrpedido)
  document.getElementById("vrpedido").focus()
}

// Defina o foco inicial no primeiro campo (vrpedido)
document.getElementById("vrpedido").focus()
