import "./Rodape.css";

const Rodape = (props) => {
  return (
    <section className="appRodape">
      <div>
        <img src={props.imagemFb} alt={props.altFb} />
        <img src={props.imagemTw} alt={props.altTw} />
        <img src={props.imagemIg} alt={props.altIg} />
      </div>
      <img src="/imagens/logo.png" alt="Logo Organo" className="logo" />
      <p>Desenvolvido por Lorenzo Bordignon.</p>
    </section>
  );
};

export default Rodape;
