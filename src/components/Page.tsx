import { Draggable } from "react-beautiful-dnd";

const Page: React.FC<{ page: string; index: number }> = ({ page, index }) => {
  return (
    <Draggable draggableId={page} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-green-100 m-1"
        >
          <h2>{page}</h2>
        </div>
      )}
    </Draggable>
  );
};

export default Page;
