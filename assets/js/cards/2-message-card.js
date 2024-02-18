const inputCpf = document.getElementById("input-cpf");
const inputPhone = document.getElementById("input-phone");
const inputMessage = document.getElementById("input-message");
const formButton = document.getElementById("form-button");

function formatCPF(value) {
  const sanitizedValue = value.replace(/\D/g, '');

  let formattedValue = '';
  for (let i = 0; i < sanitizedValue.length; i++) {
    if (i === 3 || i === 6) {
      formattedValue += '.';
    }
    if (i === 9) {
      formattedValue += '-';
    }
    formattedValue += sanitizedValue[i];
  }

  return formattedValue;
}

function formatPhoneRealTime(value) {
  const formattedValue = value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d{0,5})(\d{0,4})/, '($1) $2-$3');
  return formattedValue;
}

inputCpf.addEventListener("input", () => {
  inputCpf.value = formatCPF(inputCpf.value);
});

inputPhone.addEventListener("input", () => {
  inputPhone.value = formatPhoneRealTime(inputPhone.value);
});


formButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (inputCpf.value.trim() !== "" && inputPhone.value.trim() !== "" && inputMessage.value.trim() !== "") {
    alert("Mensagem enviado com sucesso.");
    inputCpf.value = "";
    inputPhone.value = "";
    inputMessage.value = "";
  } else {
    alert("Preencha todos os campos antes de enviar.");
  }
});
