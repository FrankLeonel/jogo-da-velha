import * as S from "./CardCasa.style";

const CardCasa = ({ children, onClick, ...props }) => {
  return (
    <S.CardCasaContainer
      {...props}
      onClick={onClick}
      className={children !== "" ? "selected" : null}
    >
      {children}
    </S.CardCasaContainer>
  );
};

export default CardCasa;
