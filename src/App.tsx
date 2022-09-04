import Router from "@/components/Router";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/styles/global-style";
import { theme } from "@/styles/theme";
import { RecoilRoot, useRecoilSnapshot } from "recoil";
import { useEffect } from "react";

const DebugObserver = () => {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.log("The following atoms were modified:");
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.log(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);
  return null;
};

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
