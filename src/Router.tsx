import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
