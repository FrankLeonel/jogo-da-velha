import Home from "pages/HomePage";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/GloablStyle";
import theme from "theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
