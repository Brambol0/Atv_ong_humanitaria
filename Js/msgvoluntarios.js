const form = document.querySelector("form");
const nomeInput = document.getElementById("inome");
const emailInput = document.getElementById("Email");
const cpfInput = document.getElementById("CPF");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita envio padrão

  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim();
  const cpf = cpfInput.value.trim();

  // Regex simples para email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Regex para CPF (000.000.000-00)
  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

  // Validação
  if (nome === "" || email === "" || cpf === "") {
    message.textContent = "Por favor, preencha todos os campos obrigatórios.";
    message.style.color = "red";
    return;
  }

  if (!emailRegex.test(email)) {
    message.textContent = "Por favor, insira um email válido.";
    message.style.color = "red";
    return;
  }

  if (!cpfRegex.test(cpf)) {
    message.textContent = "Por favor, insira um CPF válido (000.000.000-00).";
    message.style.color = "red";
    return;
  }

  // Sucesso
  message.textContent = "Formulário enviado com sucesso! Obrigado por se voluntariar!";
  message.style.color = "green";

  // Limpa o formulário
  form.reset();

  // Mensagem desaparece após 5 segundos
  setTimeout(() => {
    message.textContent = "";
  }, 5000);
});
