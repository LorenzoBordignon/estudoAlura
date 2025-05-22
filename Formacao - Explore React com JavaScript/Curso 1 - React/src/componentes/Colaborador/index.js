import "./Colaborador.css";
import { FaTrashAlt } from "react-icons/fa";

const Colaborador = ({
  nome,
  cargo,
  imagem,
  corDeFundo,
  aoDeletar,
  id,
  favorito,
}) => {
  return (
    <div className="colaborador">
      <FaTrashAlt className="deletar" onClick={() => aoDeletar(id)} />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodapeColaborador">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <div className="favoritar">{favorito}</div>
      </div>
    </div>
  );
};

export default Colaborador;
