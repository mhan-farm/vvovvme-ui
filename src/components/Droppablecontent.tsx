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
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={`flex flex-col p-2 
          ${snapshot.isDraggingOver ? "bg-yellow-100" : "bg-purple-400"}
          `}
          // "flex flex-col bg-yellow-100 p-2"
        >
          {pageList.map((page, index) => (
            <Page key={page} page={page} index={index} />
          ))}
        </div>
      )}
    </Droppable>
  );
};

export default Droppablecontent;
