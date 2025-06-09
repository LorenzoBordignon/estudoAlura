import "./btnHideForm.css";
import { useState } from "react";

const BtnHideForm = ({ onToggleVisibility }) => {
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleClick = () => {
    const newVisibility = !isFormVisible;
    setIsFormVisible(newVisibility);
    onToggleVisibility(newVisibility);
  };

  return (
    <button className="btn-hide-form" onClick={handleClick}>
      {isFormVisible ? "Esconder Formulário" : "Mostrar Formulário"}
    </button>
  );
};

export default BtnHideForm;
