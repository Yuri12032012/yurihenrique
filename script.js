// Aqui começa o JavaScript principal do site
document.addEventListener("DOMContentLoaded", function () {
  // Pegando o botão do tema e a raiz do documento
  const botaoTema = document.getElementById("temaBtn");
  const raiz = document.documentElement;

  // Parte que cuida do tema claro/escuro
  if (botaoTema) {
    // Verifica se já existe um tema salvo no navegador
    const temaSalvo = localStorage.getItem("tema");

    // Se o tema salvo for escuro, aplica a classe dark
    if (temaSalvo === "dark") {
      raiz.classList.add("dark");
    } else {
      raiz.classList.remove("dark");
    }

    // Quando clicar no botão, troca o tema
    botaoTema.addEventListener("click", function () {
      raiz.classList.toggle("dark");

      // Salva o tema escolhido
      if (raiz.classList.contains("dark")) {
        localStorage.setItem("tema", "dark");
      } else {
        localStorage.setItem("tema", "light");
      }
    });
  }

  // Agora começa a parte do formulário de contato
  const form = document.getElementById("formContato");

  // Só executa essa parte se o formulário existir na página
  if (form) {
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const mensagemInput = document.getElementById("mensagem");
    const modal = document.getElementById("modal");
    const fecharModal = document.getElementById("fecharModal");

    // Quando a pessoa enviar o formulário
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const nome = nomeInput.value.trim();
      const email = emailInput.value.trim();
      const mensagem = mensagemInput.value.trim();

      // Confere se algum campo ficou vazio
      if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos!");
        return;
      }

      // Expressão para validar o formato do e-mail
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Se o e-mail estiver errado, mostra o aviso
      if (!emailValido.test(email)) {
        alert("Email inválido! Digite um endereço como usuario@dominio.com");
        return;
      }

      // Se estiver tudo certo, mostra o modal
      if (modal) {
        modal.classList.add("show");
      }

      // Limpa os campos depois do envio
      form.reset();
    });

    // Fecha o modal no botão OK
    if (fecharModal) {
      fecharModal.addEventListener("click", function () {
        if (modal) {
          modal.classList.remove("show");
        }
      });
    }

    // Fecha o modal clicando fora da caixa
    if (modal) {
      modal.addEventListener("click", function (event) {
        if (event.target === modal) {
          modal.classList.remove("show");
        }
      });
    }
  }
});
