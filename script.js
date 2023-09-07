// Função para verificar se todos os campos estão preenchidos e habilitar o botão
function verificarCamposPreenchidos() {
  var vrpedido = document.getElementById("vrpedido").value;
  var desconto = document.getElementById("desconto").value;
  var sucata = document.getElementById("sucata").value;
  var adicional = document.getElementById("adicional").value;
  var calcularBtn = document.getElementById("calcularBtn");

  // Verifica se todos os campos estão preenchidos
  if (vrpedido !== "" && desconto !== "" && sucata !== "" && adicional !== "") {
      calcularBtn.removeAttribute("disabled");
  } else {
      calcularBtn.setAttribute("disabled", "disabled");
  }
}

// Função para calcular
function calcular() {
  // Obtenha os valores dos campos de entrada
  var vrpedido = parseFloat(document.getElementById("vrpedido").value);
  var desconto = parseFloat(document.getElementById("desconto").value);
  var sucata = parseFloat(document.getElementById("sucata").value);
  var adicional = parseFloat(document.getElementById("adicional").value);

  // Verifique se os valores são válidos
  if (isNaN(vrpedido) || isNaN(desconto) || isNaN(sucata) || isNaN(adicional)) {
      alert("Por favor, insira valores válidos em todos os campos.");
      return;
  }

  // Realize os cálculos
  var vrfinal = (vrpedido - (vrpedido * desconto / 100)) * (1 - adicional / 100) + sucata;
  var descfinal = (1 - vrfinal / vrpedido) * 100;

  // Exiba os resultados
  var resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "Valor Final: " + vrfinal.toFixed(2) + "<br>Desconto Final (%): " + descfinal.toFixed(3);
}

// Função para limpar os campos e desabilitar o botão Calcular
function limparCampos() {
  document.getElementById("vrpedido").value = "";
  document.getElementById("desconto").value = "";
  document.getElementById("sucata").value = "";
  document.getElementById("adicional").value = "3";
  document.getElementById("calcularBtn").setAttribute("disabled", "disabled");
  document.getElementById("resultado").innerHTML = "";

  // Defina o foco no primeiro campo (vrpedido)
  document.getElementById("vrpedido").focus();
}

// Adicione ouvintes de evento "keyup" a cada campo de entrada
document.getElementById("vrpedido").addEventListener("keyup", verificarCamposPreenchidos);
document.getElementById("desconto").addEventListener("keyup", verificarCamposPreenchidos);
document.getElementById("sucata").addEventListener("keyup", verificarCamposPreenchidos);
document.getElementById("adicional").addEventListener("keyup", verificarCamposPreenchidos);

// Inicialmente, desabilite o botão Calcular
document.getElementById("calcularBtn").setAttribute("disabled", "disabled");
