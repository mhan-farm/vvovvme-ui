import { useEffect } from "react";
import Router from "./Router";
import { Ripple, Input, initTE } from "tw-elements";

function App() {
  useEffect(() => {
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
