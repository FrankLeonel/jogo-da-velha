import returnPosition from "./returnPosition";

const checkEmptySpace = (jogo, element) => {
  const { position } = returnPosition(element);
  const condition = jogo[position.posFirst][position.posSecond] === "";
  return condition ? true : false;
};

export default checkEmptySpace;
