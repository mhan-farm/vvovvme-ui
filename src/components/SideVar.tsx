import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import PostService from "../services/PostService";
import { useEffect, useState } from "react";
import { Post } from "../interface/response/Post";
import { Link } from "react-router-dom";
import { atom, useRecoilState } from "recoil";
import Page from "./Page";
import Droppablecontent from "./Droppablecontent";

interface IpageListState {
  [key: string]: string[];
}

const pageListState = atom<IpageListState>({
  key: "pageList",
  default: {
    page1: ["a", "b"],
    page2: ["c", "d", "e"],
    page3: ["f"],
  }, // 초기 페이지 목록
});

const SideVar = () => {
  // const [posts, setPosts] = useState<Post[]>([]);

  const [pageList, setPageList] = useRecoilState(pageListState);

  // --- Draggable이 Droppable로 드래그 되었을 때 실행되는 이벤트
  const onDragEnd = (result: DropResult) => {
    console.log(result); // 이동 데이터 정보
    const { destination, source, draggableId } = result;
    {
      /* 
      source : 이동을 시작하는 데이터
      destination : 이동을 종료하는 데이터
      draggableId : 보드 Id
    */
    }

    // 이동이 없으면 기존 데이터를 반환
    if (!destination) return;

    // 같은 보드 내에서 이동
    if (destination?.droppableId === source.droppableId) {
      setPageList((allBoards) => {
        const copyBoard = [...allBoards[source.droppableId]]; // 이동을 원하는 보드 복사
        copyBoard.splice(source.index, 1); // 이동 시작 보드에서 (이동을 원하는)데이터 삭제
        copyBoard.splice(destination.index, 0, draggableId); // 이동 종료 보드에서 (이동을 원하는) 데이터 추가
        return {
          // 다른 보드들도 같이 붙혀서 새로운 보드 반환
          ...allBoards,
          [source.droppableId]: copyBoard,
        };
      });
    }

    // 다른 보드 간 이동
    if (destination.droppableId !== source.droppableId) {
      setPageList((allBoards) => {
        const copySourceBoard = [...allBoards[source.droppableId]]; // 이동 시작 보드 복사
        const copyDestinationBoard = [...allBoards[destination.droppableId]]; // 이동 종료 보드 복사

        copySourceBoard.splice(source.index, 1);
        copyDestinationBoard.splice(destination.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: copySourceBoard,
          [destination.droppableId]: copyDestinationBoard,
        };
      });
    }

    // setPageList((oldPageList) => {
    //   const copyPageList = [...oldPageList];
    //   copyPageList.splice(source.index, 1);
    //   copyPageList.splice(destination.index, 0, draggableId);
    //   return copyPageList;
    // });
  };

  // useEffect(() => {
  //   PostService.getPosts()
  //     .then((response) => {
  //       console.log(response.data);
  //       const content = response.data.content;
  //       setPosts(content);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="bg-red-100 dark:bg-neutral-900 p-2 w-52 md:w-60 h-full fixed">
        <div className="flex items-center justify-center space-x-2 text-neutral-600 dark:text-neutral-300 rounded-sm my-3">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
            className="w-12 rounded-full shadow-black"
            alt="Avatar"
          />
          <div className="text-lg">miruy의 vvovv</div>
        </div>

        {/* <Droppable droppableId="one">
          {(magic) => (
            <ul
              className="flex flex-col p-2 bg-blue-100 dark:bg-neutral-900"
              ref={magic.innerRef}
              {...magic.droppableProps}
            >
              {posts.map((post, index) => (
                <Draggable draggableId={`${post.post_id}`} index={index}>
                  {(magic) => (
                    <li
                      className="
                            bg-neutral-100 hover:bg-neutral-300 active:text-opacity-40 active:bg-opacity-40
                            dark:bg-neutral-900 dark:hover:bg-neutral-700 dark:active:text-opacity-40 dark:active:bg-opacity-40
                            text-neutral-600 dark:text-neutral-300 rounded-sm p-0.5"
                      ref={magic.innerRef}
                      {...magic.draggableProps}
                      {...magic.dragHandleProps}
                    >
                      <Link to={`/:username/edit/${post.post_id}`}>
                        {post.title}
                      </Link>
                    </li>
                  )}
                </Draggable>
              ))}
              {magic.placeholder}
            </ul>
          )}
        </Droppable> */}

        {/* recoil test */}
        <div className="grid grid-rows-3 gap-2 bg-blue-100 p-2">
          {Object.keys(pageList).map((pageId) => (
            <Droppablecontent
              pageList={pageList[pageId]}
              pageId={pageId}
              key={pageId}
            />
          ))}
        </div>
      </div>
    </DragDropContext>
  );
};

export default SideVar;
