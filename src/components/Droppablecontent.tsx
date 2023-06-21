import { Draggable, DraggableProvided, Droppable } from "react-beautiful-dnd";
import { Test2, TestPost, postState2, postsState } from "../atom/atoms";
import DraggableContent from "./DraggableContent";
import { useRecoilState } from "recoil";

interface IDroppableContent {
  post: TestPost;
  topProvided: DraggableProvided;
  isHovering: boolean;
}

const DroppableContent = () => {
  const [test, setTest] = useRecoilState<Test2>(postState2);

  return (
    <Droppable droppableId="-1" isDropDisabled={false}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="bg-blue-400"
        >
          {test.postOrders.map((postOrder) => {
            return (
              <Draggable
                isDragDisabled={false}
                draggableId={postOrder.id + ""}
                index={postOrder.sequence}
                key={postOrder.id}
              >
                {(provided, snapshot) => (
                  <div
                    className="my-2"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <div>{test.posts[postOrder.id].title}</div>
                    <Droppable
                      droppableId={postOrder.id + ""}
                      isDropDisabled={true}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          className="bg-green-400 my-2"
                        >
                          {postOrder.subPostOrder.map((postOrder) => {
                            return (
                              <Draggable
                                isDragDisabled={true}
                                draggableId={postOrder.id + ""}
                                index={postOrder.sequence}
                                key={postOrder.id}
                              >
                                {(provided, snapshot) => (
                                  <div
                                    className="ml-4 my-2"
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    {test.posts[postOrder.id].title}
                                  </div>
                                )}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </div>
                )}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DroppableContent;
