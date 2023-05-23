import { useEffect } from "react";
import Router from "./Router";
import { Ripple, initTE } from "tw-elements";

function App() {
  useEffect(() => {
    initTE({ Ripple });
  }, []);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
