import { useEffect } from "react";
import Router from "./Router";
import { Dropdown, Ripple, Collapse, Sidenav, initTE } from "tw-elements";
import { RecoilRoot } from "recoil";

function App() {
  useEffect(() => {
    initTE({ Dropdown });
    initTE({ Ripple });
    initTE({ Collapse });
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
