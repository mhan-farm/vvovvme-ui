// Page.tsx
import React, { useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";

function Page1(): JSX.Element {
  const [items, setItems] = useState<string[]>(["Item 1", "Item 2", "Item 3"]);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const newItems = Array.from(items);
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);

    setItems(newItems);
  };

  return (
    <div className="mt-32">
      <Droppable droppableId="droppable">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {items.map((item, index) => (
              <Draggable key={item} draggableId={item} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Link to={`/page/${item}`}>{item}</Link>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default Page1;
