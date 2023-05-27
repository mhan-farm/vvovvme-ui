import { useEffect } from "react";
import Router from "./Router";
import { Dropdown, Ripple, Input, initTE } from "tw-elements";

function App() {
  useEffect(() => {
    initTE({ Dropdown });
    initTE({ Ripple });
    initTE({ Input });
  }, []);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
