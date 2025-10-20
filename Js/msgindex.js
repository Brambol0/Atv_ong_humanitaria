const form = document.querySelector("form");
  const emailInput = document.getElementById("email-input");
  const message = document.getElementById("form-message");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita envio padrão

    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || !emailRegex.test(email)) {
      // Mensagem de erro
      message.textContent = "Por favor, insira um email válido.";
      message.style.color = "red";
      return;
    }

    // Mensagem de sucesso
    message.textContent = "Obrigado por assinar a newsletter!";
    message.style.color = "green";

    // Limpa o formulário
    form.reset();
  });
