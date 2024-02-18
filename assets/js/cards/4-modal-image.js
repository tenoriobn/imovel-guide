const buttonOpenModal = document.getElementById("button-open-modal");
const buttonModalClose = document.getElementById("modal-close");
const modal = document.getElementById("modal");
const body = document.body;

const toggleModal = () => {
  const scrollPosition = window.scrollY ;
  const viewportHeight = window.innerHeight;

  modal.classList.toggle("active__modal");
  body.classList.toggle("body-menu-open");

  if (modal.classList.contains("active__modal")) {
    const modalTop = scrollPosition + (viewportHeight / 2) - (modal.clientHeight / 2);
    modal.style.top = `${Math.max(scrollPosition, modalTop)}px`;

    modal.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

buttonOpenModal.addEventListener("click", toggleModal);
buttonModalClose.addEventListener("click", toggleModal);
