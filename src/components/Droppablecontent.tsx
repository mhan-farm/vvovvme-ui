import { DraggableProvided, Droppable } from "react-beautiful-dnd";
import { TestPost } from "../atom/atoms";
import DraggableContent from "./DraggableContent";

interface IDroppableContent {
  post: TestPost;
  topProvided: DraggableProvided;
  isHovering: boolean;
}

const DroppableContent = ({
  post,
  topProvided,
  isHovering,
}: IDroppableContent) => {
  return (
    <Droppable droppableId={"post-" + post.id} type="POST">
      {(provided, snapshot) => (
        <div ref={topProvided.innerRef} {...topProvided.draggableProps}>
          <div>{post.title}</div>
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {post.subPosts.map((subPost, index) => (
              <DraggableContent
                subPost={subPost}
                key={subPost.id}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default DroppableContent;
