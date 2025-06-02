import "./btnHideForm.css";

const BtnHideForm = () => {
  const sectionForm = document.querySelector(".formulario-container");

  function closeForm(evento) {
    evento.preventDefault();
    sectionForm.classList.toggle("display");
  }
  return (
    <button
      onClick={(evento) => {
        closeForm(evento);
      }}
    >
      Fechar Formulário
    </button>
  );
};

export default BtnHideForm;
