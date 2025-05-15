import "./Rodape.css";

const Rodape = () => {
  return (
    <section className="appRodape">
      <div>
        <img src="/imagens/fb.png" alt="Facebook" />
        <img src="/imagens/tw.png" alt="Twitter(X)" />
        <img src="/imagens/ig.png" alt="Instagram" />
      </div>
      <img src="/imagens/logo.png" alt="Logo Organo" className="logo" />
      <p>Desenvolvido por Lorenzo Bordignon.</p>
    </section>
  );
};

export default Rodape;
