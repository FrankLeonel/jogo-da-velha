import Tabuleiro from "components/Tabuleiro";
import CardCasa from "components/Tabuleiro/CardCasa";
import { Fragment, useState } from "react";
import checkEmptySpace from "utils/checkEmptySpace";
import checkTie from "utils/checkTie";
import checkVitory from "utils/checkVictory";
import returnPosition from "utils/returnPosition";
import * as S from "./Home.style";

const Home = () => {
  const initialState = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const [jogo, setJogo] = useState(initialState);
  const [simboloAtual, setSimboloAtual] = useState("X");
  const [jogando, setJogando] = useState(true);

  const handleCard = (card, row) => {
    return card.map((item, index) => {
      return (
        <CardCasa
          key={index}
          data-pos={`${row}${index}`}
          onClick={(e) => play(e)}
        >
          {item}
        </CardCasa>
      );
    });
  };

  const changePlayer = () =>
    simboloAtual === "X" ? setSimboloAtual("O") : setSimboloAtual("X");

  const play = (element) => {
    const { position } = returnPosition(element);
    if (jogando) {
      if (checkEmptySpace(jogo, element)) {
        jogo[position.posFirst][position.posSecond] = simboloAtual;
        changePlayer();
        if (checkVitory(jogo, simboloAtual)) {
          changePlayer();
          alert("Jogador " + simboloAtual + " venceu!");
          setJogando(false);
        } else if (checkTie(jogo, simboloAtual)) {
          alert("O jogo terminou empatado");
          setJogando(false);
        }
      } else {
        alert("Esse espaço não está disponível");
      }
    }
  };

  const restart = () => {
    setJogando(true);
    setJogo(initialState);
    setSimboloAtual("X");
  };

  return (
    <S.Content>
      <S.HomeContainer>
        <S.Title>Jogo da velha</S.Title>
        <S.Description>
          <span>Descrição: </span>
          Esse jogo é composto por três linhas e três colunas, na qual o
          objetivo do jogo é fazer uma sequência de três símbolos iguais, seja
          em linha vertical, horizontal ou diagonal, enquanto tenta impedir que
          seu adversário faça o mesmo. Desta forma, quando um dos participantes
          faz uma linha, ganha o jogo. À vez, cada jogador coloca a sua marca
          onde pretender (um joga com “0”, outro jogador com “X”).
        </S.Description>

        <S.Section jogando={jogando}>
          <S.SimboloAtual>Vez de jogar: {simboloAtual}</S.SimboloAtual>
          {!jogando ? (
            <S.Button onClick={() => restart()}>Jogar Novamente</S.Button>
          ) : (
            <div />
          )}
        </S.Section>

        <Tabuleiro>
          {jogo.map((card, index) => {
            return <Fragment key={index}>{handleCard(card, index)}</Fragment>;
          })}
        </Tabuleiro>
      </S.HomeContainer>
    </S.Content>
  );
};

export default Home;
