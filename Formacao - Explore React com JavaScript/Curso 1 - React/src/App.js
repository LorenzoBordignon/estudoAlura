import { useState } from "react";
import Banner from "./componentes/Banner/Banner.js";
import Formulario from "./componentes/Formulario/index.js";
import Time from "./componentes/Time/index.js";
import Rodape from "./componentes/Rodape/index.js";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#56C177",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#81CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#DF6B68",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#DB6DBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "##FFBA06",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FFEEDF",
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  function deletarColaborador(id) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        nomeTimes={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time) => (
        <Time
          mudarCor={mudarCorDoTime}
          id={time.id}
          key={time.nome}
          nome={time.nome}
          cor={time.cor}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={deletarColaborador}
        />
      ))}
      <Rodape
        imagemFb="/imagens/fb.png"
        altFb="Facebook"
        imagemTw="/imagens/tw.png"
        altTw="Twitter(X)"
        imagemIg="/imagens/ig.png"
        altIg="Instagram"
      />
    </div>
  );
}

export default App;
