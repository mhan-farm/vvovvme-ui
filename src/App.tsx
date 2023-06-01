import { useEffect } from "react";
import Router from "./Router";
import { Dropdown, Ripple, Input, Sidenav, initTE } from "tw-elements";

function App() {
  useEffect(() => {
    initTE({ Dropdown });
    initTE({ Ripple });
    initTE({ Input });
    initTE({ Sidenav });
  }, []);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
