import Router from "@/components/Router";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/styles/global-style";
import { theme } from "@/styles/theme";
import { RecoilRoot } from "recoil";
import { DebugObserver } from "@/components/common";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <DebugObserver />
          <Router />
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}

export default App;
