const checkVitory = (jogo, simboloAtual) => {
  let vitoria = false;
  let pontos = 0;

  // Verifica a vitória na linha
  for (let l = 0; l < 3; l++) {
    pontos = 0;
    for (let c = 0; c < 3; c++) {
      if (jogo[l][c] === simboloAtual) pontos++;
    }
    if (pontos === 3) {
      return !vitoria;
    }
  }

  // Verifica a vitória na coluna
  for (let c = 0; c < 3; c++) {
    pontos = 0;
    for (let l = 0; l < 3; l++) {
      if (jogo[l][c] === simboloAtual) pontos++;
    }
    if (pontos === 3) return !vitoria;
  }

  // Verifica a vitória na diagonal
  pontos = 0;
  for (let d = 0; d < 3; d++) {
    if (jogo[d][d] === simboloAtual) pontos++;
  }

  if (pontos === 3) return !vitoria;

  pontos = 0;
  let l = 0;
  for (let c = 2; c >= 0; c--) {
    if (jogo[l][c] === simboloAtual) pontos++;

    l++;
  }

  if (pontos === 3) return !vitoria;

  return vitoria;
};

export default checkVitory;
