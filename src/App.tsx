import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import { AppLayout, DebugObserver } from "@/components/common";
import Router from "@/components/Router";
import { GlobalStyle } from "@/styles/global-style";
import { theme } from "@/styles/theme";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <DebugObserver />
          <AppLayout>
            <Router />
          </AppLayout>
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}

export default App;
