import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import DefaultLayout from "../layouts/DefaultLayout";
import Page1 from "./Page1";

const Test = () => {
  const onDragEnd = ({ source, destination }: DropResult) => {
    console.log(">>> source", source);
    console.log(">>> destination", destination);
  };
  return (
    <DefaultLayout>
      <div className="flex-1 flex flex-col mx-10 md:mx-20">
        <DragDropContext onDragEnd={onDragEnd}>
          <Page1 />
        </DragDropContext>
      </div>
    </DefaultLayout>
  );
};

export default Test;
