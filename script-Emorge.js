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
  // Esconde as opções
  document.querySelector('.opcao').style.display = 'none';
  document.querySelector('.opcao2').style.display = 'none';
  
  // Mostra o formulário
  document.getElementById('conteudo').style.display = 'block';
}

function voltar() {
  // Esconde as opções
  document.querySelector('.opcao').style.display = 'none';
  document.querySelector('.opcao2').style.display = 'none';
  
  // Redireciona pra index
  window.location.href = 'Index.html';
}