import "./Campo.css";

const Campo = ({
  placeholder,
  type = "text",
  aoAlterado,
  label,
  valor,
  obrigatorio,
}) => {
  const placeholderModificada = `${placeholder}...`;

  const aoDigitado = (event) => {
    aoAlterado(event.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default Campo;
