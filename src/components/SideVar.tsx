import {
  DragDropContext,
  DragStart,
  Draggable,
  DropResult,
  Droppable,
  PreDragActions,
  ResponderProvided,
  SensorAPI,
  SnapDragActions,
  TryGetLock,
  useMouseSensor,
} from "react-beautiful-dnd";
import DroppableContent from "./DroppableContent";
import { useRecoilState, useSetRecoilState } from "recoil";
import { PostOrder, postState2 } from "../atom/atoms";

const SideVar: React.FC = () => {
  const [test, setTest] = useRecoilState(postState2);
  const handleDragEnd = (result: DropResult) => {
    // const fromIndex = result.source.index;

    // const copyPostOrder: PostOrder = {
    //   id: test.postOrders[fromIndex].id,
    //   sequence: test.postOrders[fromIndex].sequence,
    //   isDragDisabled: false,
    //   subPostOrder: test.postOrders[fromIndex].subPostOrder,
    // };

    // setTest((test) => {
    //   const copyPostOrders = [...test.postOrders];
    //   copyPostOrders.splice(fromIndex, 1);
    //   copyPostOrders.splice(fromIndex, 0, copyPostOrder);
    //   console.log(copyPostOrders);
    //   return {
    //     ...test,
    //     postOrders: copyPostOrders,
    //   };
    // });

    if (!result.destination) return;

    const fromPostDroppableId = parseInt(result.source.droppableId);
    const toPostDroppableId = parseInt(result.destination!!.droppableId);

    const fromPostSequence = result.source.index;
    const toPostSequence = result.destination!!.index;

    // // 같은 페이지 이동
    // if (fromPostDroppableId === toPostDroppableId) {
    //   setPosts((posts) => {
    //     const copyPosts = [...posts];
    //     const fromPost = posts[fromPostDroppableId];

    //     copyPosts.splice(fromPostSequence, 1);
    //     copyPosts.splice(toPostSequence, 0, fromPost);

    //     const sortedPosts = copyPosts.map((post, index) => {
    //       return {
    //         ...post,
    //         sequence: index,
    //       };
    //     });

    //     return sortedPosts;
    //   });
    // }

    console.log(result);
  };

  const handleDragStart = (start: DragStart) => {
    // const fromIndex = start.source.index;
    // const copyPostOrder: PostOrder = {
    //   id: test.postOrders[fromIndex].id,
    //   sequence: test.postOrders[fromIndex].sequence,
    //   isDragDisabled: true,
    //   subPostOrder: test.postOrders[fromIndex].subPostOrder,
    // };
    // setTest((test) => {
    //   const copyPostOrders = [...test.postOrders];
    //   copyPostOrders.splice(fromIndex, 1);
    //   copyPostOrders.splice(fromIndex, 0, copyPostOrder);
    //   console.log(copyPostOrders);
    //   return {
    //     ...test,
    //     postOrders: copyPostOrders,
    //   };
    // });
  };

  return (
    <DragDropContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      enableDefaultSensors={false}
      sensors={[useMouseSensor]}
    >
      <div className="flex w-[100px] bg-red-400 mt-[10rem]">
        <DroppableContent />
      </div>
    </DragDropContext>
  );
};

export default SideVar;
