import { Droppable } from "react-beautiful-dnd";
import DraggableContent from "./DraggableContent";
import { PostProps } from "./SideVar";

interface DroppableProps {
  posts: PostProps[];
  postId: string;
}

const DroppableContent = ({ posts, postId }: DroppableProps) => {
  return (
    <Droppable droppableId={postId}>
      {(provided, snapshot) => (
        <ul
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={`flex flex-col 
          ${
            snapshot.isDraggingOver
              ? "bg-neutral-200 dark:bg-neutral-800"
              : "bg-neutral-100 dark:bg-neutral-900"
          }
          `}
        >
          {posts.map((post, index) => (
            <DraggableContent
              key={post.id}
              index={index}
              postId={post.id}
              postTitle={post.title}
            />
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

export default DroppableContent;
