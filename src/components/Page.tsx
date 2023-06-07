import { Draggable } from "react-beautiful-dnd";

const Page: React.FC<{ page: string; index: number }> = ({ page, index }) => {
  return (
    <Draggable draggableId={page} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-neutral-100 hover:bg-neutral-300 active:bg-opacity-40
                     dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:active:bg-opacity-40
                     text-neutral-600 dark:text-neutral-300 rounded-sm p-0.5"
        >
          <h2>{page}</h2>
        </li>
      )}
    </Draggable>
  );
};

export default Page;
