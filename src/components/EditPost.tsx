import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { PostProps, postsState } from "./SideVar";
import { time } from "console";

interface TitleProps {
  id: number;
  title: string;
}

const EditPost = () => {
  const { register, setValue, handleSubmit } = useForm<TitleProps>();
  const setPosts = useSetRecoilState(postsState); // posts atom 생성

  const savePost = (data: TitleProps) => {
    const newPost = {
      id: Date.now(),
      title: data.title,
    };

    // console.log(newPost);

    setPosts((all) => {
      console.log(all);
      return {
        posts: [...all.posts, newPost],
      };
    });

    setValue("title", "");
  };
  return (
    <div className="mt-20 mx-auto">
      <form onSubmit={handleSubmit(savePost)}>
        <input {...register("title")} type="text" placeholder="제목" />
        <button>저장</button>
      </form>
    </div>
  );
};

export default EditPost;
