import checkVitory from "./checkVictory";

const checkTie = (jogo, simboloAtual) => {
  if (!checkVitory(jogo, simboloAtual)) {
    for (let l = 0; l < 3; l++) {
      for (let c = 0; c < 3; c++) {
        if (jogo[l][c] === "") return false;
      }
    }
  }
  return true;
};

export default checkTie;
