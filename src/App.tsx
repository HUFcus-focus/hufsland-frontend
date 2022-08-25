import Router from "@/components/Router";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/styles/global-style";
import { theme } from "@/styles/theme";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
