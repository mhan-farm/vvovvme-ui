import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import SideVar from "./SideVar";
import { useLocation, useNavigate } from "react-router-dom";

interface TitleProps {
  id: number;
  title: string;
}

const EditPost = () => {
  const { register, setValue, handleSubmit } = useForm<TitleProps>();

  const navigate = useNavigate();
  const location = useLocation();
  const topPage = location.state; // 상위페이지

  console.log("EditPost-topPage info:", topPage);

  const savePost = (data: TitleProps) => {
    // sidevar 배열에 추가
    // setPosts((all) => {
    //   const copyPosts = [...all.posts]; // 배열복사

    //   if (topPage !== null) {
    //     // 하위페이지 생성
    //     const newPost = {
    //       id: location.state.newId,
    //       title: data.title,
    //       subPosts: [],
    //     };

    //     const nextIndex = topPage.topPageIndex + 1; // 상위페이지의 다음 인덱스 계산
    //     copyPosts.splice(nextIndex, 0, newPost); // 복사한 배열에 새로운 post 추가
    //   } else {
    //     // 상위페이지 생성
    //     const newPost = {
    //       id: Date.now(),
    //       title: data.title,
    //       subPosts: [],
    //     };

    //     copyPosts.splice(copyPosts.length, 0, newPost); // 복사한 배열에 새로운 post 추가
    //   }
    //   return {
    //     posts: copyPosts,
    //   };
    // });

    setValue("title", "");
    navigate(`/:username/edit/${data.title}`, {
      state: topPage,
    });
  };

  return (
    <>
      <div className="mt-20 mx-auto">
        <form onSubmit={handleSubmit(savePost)}>
          <input {...register("title")} type="text" placeholder="제목" />
          <button>저장</button>
        </form>
      </div>
    </>
  );
};

export default EditPost;
