import { Draggable } from "react-beautiful-dnd";

interface IDraggableContent {
  index: number;
}
const DraggableContent = () => {
  return (
    <Draggable draggableId="data" index={0}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div>dd</div>
        </div>
      )}
    </Draggable>
  );
};

export default DraggableContent;
