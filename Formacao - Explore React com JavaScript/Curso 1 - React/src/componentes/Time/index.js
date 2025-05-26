import Colaborador from "../Colaborador";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

const Time = (props) => {
  const cssSection = { backgroundColor: hexToRgba(props.cor, "0.6") };
  const cssH3 = { borderColor: props.cor };
  return props.colaboradores.length > 0 ? (
    <section className="time" style={cssSection}>
      <input
        type="color"
        className="input-cor"
        value={props.cor}
        onChange={(evento) => props.mudarCor(evento.target.value, props.id)}
      />
      <h3 style={cssH3}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => {
          return (
            <Colaborador
              id={colaborador.id}
              favorito={colaborador.favorito}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              key={colaborador.nome}
              corDeFundo={props.cor}
              aoDeletar={props.aoDeletar}
              aoFavoritar={props.aoFavoritar}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
