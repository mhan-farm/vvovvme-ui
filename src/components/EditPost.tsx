import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import SideVar, { postsState } from "./SideVar";
import { useLocation, useNavigate } from "react-router-dom";

interface TitleProps {
  id: number;
  title: string;
}

const EditPost = () => {
  const { register, setValue, handleSubmit } = useForm<TitleProps>();
  const setPosts = useSetRecoilState(postsState);

  const navigate = useNavigate();
  const location = useLocation();
  const topPage = location.state; // 상위페이지

  console.log("EditPost-topPage info:", topPage);

  const savePost = (data: TitleProps) => {
    // 새로운 post 저장
    const newPost = {
      id: location.state.newId,
      title: data.title,
    };

    // sidevar 배열에 추가
    setPosts((all) => {
      // 배열복사
      const copyPosts = [...all.posts];

      // 상위페이지의 다음 인덱스 계산
      const nextIndex = topPage.topPageIndex + 1;

      // 복사한 배열에 새로운 post 추가
      copyPosts.splice(nextIndex, 0, newPost);

      return {
        posts: copyPosts,
      };
    });

    setValue("title", "");
    navigate(`/:username/edit/${data.title}`, {
      state: topPage,
    });
  };

  return (
    <>
      <SideVar />
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
