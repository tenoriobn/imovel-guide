const cardContainers = document.querySelectorAll(".broker-card-info");

cardContainers.forEach((cardContainer, index) => {
  const showPhone = cardContainer.querySelector(".show-phone");
  const phoneNumber = cardContainer.querySelector(".phone-number");

  showPhone.addEventListener("click", () => {
    showPhone.textContent = phoneNumber.classList.contains("active") ? "Ver Telefone" : "Ocultar Telefone";
    phoneNumber.classList.toggle("active");
  })
});
