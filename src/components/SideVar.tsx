import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import DroppableContent from "./DroppableContent";
import { TestPost, postsState } from "../atom/atoms";
import { useRecoilState } from "recoil";

const SideVar: React.FC = () => {
  const [posts, setPosts] = useRecoilState<TestPost[]>(postsState);

  const handleDragEnd = (result: DropResult) => {};

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="top-page" direction="horizontal" type="POST">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="bg-red-200 p-5 h-96"
          >
            {posts.map((post, index) => (
              <Draggable
                key={post.id}
                draggableId={"post-" + post.id}
                index={index}
              >
                {(provided, snapshot) => (
                  <DroppableContent
                    post={post}
                    topProvided={provided}
                    isHovering={snapshot.isDragging}
                  />
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default SideVar;
