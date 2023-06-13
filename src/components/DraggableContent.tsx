import { TestSubpost } from "../atom/atoms";
import { Draggable } from "react-beautiful-dnd";

interface IDraggableContent {
  subPost: TestSubpost;
  index: number;
}
const DraggableContent = ({ subPost, index }: IDraggableContent) => {
  return (
    <Draggable draggableId={"sub-" + subPost.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div>{subPost.title}</div>
        </div>
      )}
    </Draggable>
  );
};

export default DraggableContent;
