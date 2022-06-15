import styled from "styled-components";

export const CardCasaContainer = styled.li(
  ({ theme: { breakpoints, colors } }) => ({
    backgroundColor: colors.secondary,
    width: "100px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "6em",
    border: `1px solid ${colors.primary}`,
    transition: "1s all ease",

    "&:hover": {
      border: `1px solid ${colors.primaryLight}`,
    },

    "&.selected": {
      backgroundColor: colors.gray,
    },

    [breakpoints.sm]: {
      width: "200px",
      height: "200px",
      fontSize: "12em",
    },
  })
);
