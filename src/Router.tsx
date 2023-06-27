import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import EditPostRoute from "./routes/EditPostRoute";
import DetailPostRoute from "./routes/DetailPostRoute";
import CreatePostRoute from "./routes/CreatePostRoute";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute />}></Route>
        <Route path={`/:username/edit`} element={<CreatePostRoute />}></Route>
        <Route
          path={`/:username/edit/:postId`}
          element={<EditPostRoute />}
        ></Route>
        <Route
          path={`/:username/:postId`}
          element={<DetailPostRoute />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
