const returnPosition = (element) => {
  const teste = element.target.getAttribute("data-pos");
  const posFirst = parseInt(teste.substring(0, 1));
  const posSecond = parseInt(teste.substring(1, 2));

  return {
    position: {
      posFirst,
      posSecond,
    },
  };
};

export default returnPosition;
