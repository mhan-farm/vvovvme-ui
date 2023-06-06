import { useEffect } from "react";
import Router from "./Router";
import { Dropdown, Ripple, Input, Sidenav, initTE } from "tw-elements";
import { RecoilRoot } from "recoil";

function App() {
  useEffect(() => {
    initTE({ Dropdown });
    initTE({ Ripple });
    initTE({ Input });
    initTE({ Sidenav });
  }, []);

  return (
    <>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </>
  );
}

export default App;
