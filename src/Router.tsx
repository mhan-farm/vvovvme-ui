import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import EditPostRoute from "./routes/EditPostRoute";
import EditNewPostRoute from "./routes/EditNewPostRoute";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute />}></Route>

        {/* 상위페이지 생성 */}
        <Route path={`/:username/edit`} element={<EditNewPostRoute />}></Route>

        {/* 하위페이지 생성 */}
        <Route
          path={`/:username/edit/:postTitle/:newPostId`}
          element={<EditNewPostRoute />}
        ></Route>

        {/* 기존페이지 수정 */}
        <Route
          path={`/:username/edit/:postId`}
          element={<EditPostRoute />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
