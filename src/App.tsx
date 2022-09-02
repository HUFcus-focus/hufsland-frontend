import Router from "@/components/Router";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/styles/global-style";
import { theme } from "@/styles/theme";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}

export default App;
