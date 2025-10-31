      function continuar() {
        document.getElementById("btnVoltar").style.display = "none";
        document.getElementById("btnVoltar").style.display = "none";
      }
      function voltar() {
        window.location.href = "Index.html";
      }
      document
        .getElementById("formDados")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          localStorage.setItem(
            "mensagemContratado",
            "Parabéns! Agora você foi contratado pela The Brothers e irá trabalhar na escala 366x0!"
          );
          window.location.href = "Index.html";
        });
function continuar() {
  document.querySelector('.opcao').style.display = 'none';
  document.querySelector('.opcao2').style.display = 'none';
  
  document.getElementById('conteudo').style.display = 'block';
}

function voltar() {
  document.querySelector('.opcao').style.display = 'none';
  document.querySelector('.opcao2').style.display = 'none';
  
  window.location.href = 'Index.html';
}