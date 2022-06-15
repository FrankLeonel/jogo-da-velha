import styled from "styled-components";

export const TabuleiroContainer = styled.ul(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 3fr)",
  gap: "10px",
}));
