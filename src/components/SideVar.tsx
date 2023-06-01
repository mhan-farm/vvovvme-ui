import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";

const SideVar = () => {
  // --- Draggable이 Droppable로 드래그 되었을 때 실행되는 이벤트
  const onDragEnd = ({ source, destination }: DropResult) => {
    console.log(">>> source", source);
    console.log(">>> destination", destination);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="bg-neutral-100 dark:bg-neutral-900 p-3 w-52 md:w-60 h-full fixed">
        <Droppable droppableId="one">
          {(magic) => (
            <ul
              className="flex flex-col bg-neutral-100 dark:bg-neutral-900"
              ref={magic.innerRef}
              {...magic.droppableProps}
            >
              <li className="flex items-center justify-center space-x-2 text-neutral-600 dark:text-neutral-300 rounded-sm my-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                  className="w-12 rounded-full shadow-black"
                  alt="Avatar"
                />
                <div className="text-lg">miruy의 vvovv</div>
              </li>
              <Draggable draggableId="first" index={0}>
                {(magic) => (
                  <li
                    className="
                        bg-neutral-100 hover:bg-neutral-300 active:text-opacity-40 active:bg-opacity-40
                        dark:bg-neutral-900 dark:hover:bg-neutral-700 dark:active:text-opacity-40 dark:active:bg-opacity-40
                        text-neutral-600 dark:text-neutral-300 rounded-sm p-0.5"
                    ref={magic.innerRef}
                    {...magic.draggableProps}
                    {...magic.dragHandleProps}
                  >
                    Own
                  </li>
                )}
              </Draggable>
              <Draggable draggableId="second" index={1}>
                {(magic) => (
                  <li
                    className="
                      bg-neutral-100 hover:bg-neutral-300 active:text-opacity-40 active:bg-opacity-40
                      dark:bg-neutral-900 dark:hover:bg-neutral-700 dark:active:text-opacity-40 dark:active:bg-opacity-40
                      text-neutral-600 dark:text-neutral-300 rounded-sm p-0.5"
                    ref={magic.innerRef}
                    {...magic.draggableProps}
                    {...magic.dragHandleProps}
                  >
                    Two
                  </li>
                )}
              </Draggable>
              <Draggable draggableId="third" index={2}>
                {(magic) => (
                  <li
                    className="
                      bg-neutral-100 hover:bg-neutral-300 active:text-opacity-40 active:bg-opacity-40
                      dark:bg-neutral-900 dark:hover:bg-neutral-700 dark:active:text-opacity-40 dark:active:bg-opacity-40
                      text-neutral-600 dark:text-neutral-300 rounded-sm p-0.5"
                    ref={magic.innerRef}
                    {...magic.draggableProps}
                    {...magic.dragHandleProps}
                  >
                    Three
                  </li>
                )}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default SideVar;
