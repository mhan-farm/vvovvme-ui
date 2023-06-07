import { Droppable } from "react-beautiful-dnd";
import Page from "./Page";

interface PageListProps {
  pageList: string[];
  pageId: string;
}

const Droppablecontent = ({ pageList, pageId }: PageListProps) => {
  return (
    <Droppable droppableId={pageId}>
      {(provided, snapshot) => (
        <ul
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={`flex flex-col p-3 
          ${
            snapshot.isDraggingOver
              ? "bg-neutral-200 dark:bg-neutral-800"
              : "bg-neutral-100 dark:bg-neutral-900"
          }
          `}
        >
          {pageList.map((page, index) => (
            <Page key={page} page={page} index={index} />
          ))}
        </ul>
      )}
    </Droppable>
  );
};

export default Droppablecontent;
