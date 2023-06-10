import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { atom, useRecoilState } from "recoil";
import DroppableContent from "./DroppableContent";

export interface PostProps {
  id: number;
  title: string;
}

interface PostsProps {
  [key: string]: PostProps[];
}

export const postsState = atom<PostsProps>({
  key: "postsState",
  default: {
    posts: [
      { id: 1, title: "aa" },
      { id: 2, title: "bb" },
      { id: 3, title: "cc" },
      { id: 4, title: "dd" },
      { id: 5, title: "e" },
    ],
  },
});

const SideVar = () => {
  const [posts, setPosts] = useRecoilState(postsState);

  // --- Draggable이 Droppable로 드래그 되었을 때 실행되는 이벤트
  const onDragEnd = (result: DropResult) => {
    console.log(result); // 이동 데이터 정보
    const { destination, source, draggableId } = result;

    // 이동이 없으면 기존 데이터를 반환
    if (!destination) return;

    // 같은 보드 내에서 이동
    if (destination?.droppableId === source.droppableId) {
      setPosts((allBoards) => {
        const copyBoard = [...allBoards[source.droppableId]]; // 이동을 원하는 보드 복사
        const grabObj = copyBoard[source.index]; // * string을 obj로 바꿨으므로 복사한 보드를 삭제하기 전 저장

        copyBoard.splice(source.index, 1); // 이동 시작 보드에서 (이동을 원하는)데이터 삭제
        copyBoard.splice(destination.index, 0, grabObj); // 이동 종료 보드에서 (이동을 원하는) 데이터 추가 / * string인 droppableId을 사용할 수 없으므로 삭제하기 전 저장해놓은 grabObj를 추가

        return {
          // 다른 보드들도 같이 붙혀서 새로운 보드 반환
          ...allBoards,
          [source.droppableId]: copyBoard,
        };
      });
    }

    // 다른 보드 간 이동
    if (destination.droppableId !== source.droppableId) {
      setPosts((allBoards) => {
        const copySourceBoard = [...allBoards[source.droppableId]]; // 이동 시작 보드 복사
        const copyDestinationBoard = [...allBoards[destination.droppableId]]; // 이동 종료 보드 복사

        const grabObj = copySourceBoard[source.index]; // * string을 obj로 바꿨으므로 복사한 보드를 삭제하기 전 저장

        copySourceBoard.splice(source.index, 1);
        copyDestinationBoard.splice(destination.index, 0, grabObj); // * string인 droppableId을 사용할 수 없으므로 삭제하기 전 저장해놓은 grabObj를 추가

        return {
          ...allBoards,
          [source.droppableId]: copySourceBoard,
          [destination.droppableId]: copyDestinationBoard,
        };
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="bg-neutral-100 dark:bg-neutral-900 p-2 w-52 md:w-60 h-full fixed">
        <div className="flex items-center justify-center space-x-2 text-neutral-600 dark:text-neutral-300 rounded-sm my-3">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
            className="w-12 rounded-full shadow-black"
            alt="Avatar"
          />
          <div className="text-lg">miruy의 vvovv</div>
        </div>

        <div className="grid grid-rows-3 gap-2 bg-red-100 dark:bg-neutral-900 p-2">
          {Object.keys(posts).map((postId) => (
            <DroppableContent
              posts={posts[postId]}
              postId={postId}
              key={postId}
            />
          ))}
        </div>
      </div>
    </DragDropContext>
  );
};

export default SideVar;
