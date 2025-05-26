import "./Colaborador.css";
import { FaTrashAlt } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const Colaborador = ({
  nome,
  cargo,
  imagem,
  corDeFundo,
  aoDeletar,
  id,
  aoFavoritar,
  favorito,
}) => {
  function favoritar() {
    aoFavoritar(id);
  }
  return (
    <div className="colaborador">
      <FaTrashAlt className="deletar" onClick={() => aoDeletar(id)} />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodapeColaborador">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <div className="favoritar">
          {favorito ? (
            <MdFavorite onClick={favoritar} color="#ff0000" />
          ) : (
            <MdFavoriteBorder onClick={favoritar} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
