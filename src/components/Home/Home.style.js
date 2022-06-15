import styled from "styled-components";

export const Content = styled.div(({ theme: { breakpoints } }) => ({
  margin: "auto",
  maxWidth: "calc(1440px + 48px)",
  width: "100%",
  padding: "0 20px",

  [breakpoints.md]: {
    padding: "0 60px",
    maxWidth: "calc(1440px + 128px)",
  },
}));

export const HomeContainer = styled.div(({ theme: { breakpoints } }) => ({
  width: "100%",
  height: "100%",
  margin: "30px 0",
  padding: "0 30px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  // [breakpoints.md]: {
  //   padding: "0 100px",
  //   maxWidth: "calc(1440px + 128px)",
  // },

  [breakpoints.lg]: {
    // padding: "0 200px",
  },
}));

export const Title = styled.h1(({ theme }) => ({
  margin: 0,
  fontSize: "2.8em",
  textAlign: "center",
}));

export const Description = styled.p(({ theme }) => ({
  margin: "20px 0",
  fontSize: "1em",
  fontWeight: 600,
  lineHeight: "26px",

  span: {
    fontWeight: 800,
  },
}));

export const Section = styled.div(({ theme: { breakpoints }, jogando }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  justifyContent: jogando ? "center" : "space-between",
  margin: "10px 0 30px",

  [breakpoints.sm]: {
    width: "50%",
  },
}));

export const SimboloAtual = styled.p(({ theme }) => ({
  margin: 0,
  fontSize: "1.2em",
  fontWeight: 600,
  lineHeight: "26px",
}));

export const Button = styled.button(({ theme: { colors } }) => ({
  margin: 0,
  padding: "12px",
  fontSize: "1em",
  fontWeight: 600,
  cursor: "pointer",
  backgroundColor: "transparent",
  border: `1px solid ${colors.white}`,
  borderRadius: "8px",
  transition: "1s all ease",

  "&:hover": {
    border: `1px solid ${colors.primaryLight}`,
  },
}));
