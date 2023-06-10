import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import EditRoute from "./routes/EditRoute";
import EditHomeRoute from "./routes/EditHomeRoute";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute />}></Route>
        <Route
          path={`/:username/edit/:postTitle/:newPostId`}
          element={<EditHomeRoute />}
        ></Route>
        <Route path={`/:username/edit`} element={<EditHomeRoute />}></Route>
        <Route path={`/:username/edit/:postId`} element={<EditRoute />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
