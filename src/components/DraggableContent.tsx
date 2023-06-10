import { Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";

interface DroggableProps {
  postId: number;
  postTitle: string;
  index: number;
}

const DraggableContent = ({ postId, postTitle, index }: DroggableProps) => {
  return (
    <Draggable draggableId={postId + ""} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-green-100 hover:bg-neutral-300 active:bg-opacity-40
                     dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:active:bg-opacity-40
                     text-neutral-600 dark:text-neutral-300 rounded-sm p-0.5"
        >
          <div className="flex items-center justify-between">
            <h2>{postTitle}</h2>
            <Link to={"/:username/edit"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </Link>
          </div>
        </li>
      )}
    </Draggable>
  );
};

export default DraggableContent;
