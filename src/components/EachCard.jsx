import { useContext } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ContextData } from "../context/ContextData";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
function EachCard({ card }) {
  const selectedValue = useContext(ContextData);
  //as prop from boards start
  //console.log("card", card);
  const { id, taskHead, taskDes, priorty, status } = card;
  //as prop from boards end
  const { setOpen, setSelectedId, removeCard } = selectedValue;

  // Make this card draggable
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: id,
      data: { card },
    });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    opacity: isDragging ? 1 : 1,
    cursor: "grab",
    zIndex: isDragging ? 9999 : "auto",
    position: isDragging ? "fixed" : "relative",
    width: isDragging ? "350px" : "auto",
  };

  function handleEdit() {
    //console.log(id);

    setSelectedId(id);
    setOpen(true);
  }

  //delete
  function handleDelete(e) {
    e.stopPropagation();
    removeCard(id);
  }

  //color decision for card
  let borderColor = "";
  if (status === "Todo") {
    borderColor = "border-l-red-500";
  } else if (status === "InProgress") {
    borderColor = "border-l-yellow-500";
  } else {
    borderColor = "border-l-green-500";
  }

  //color decision for card
  let backgroundColor = "";
  if (priorty === "Low") {
    backgroundColor = "bg-fuchsia-500";
  } else if (priorty === "Medium") {
    backgroundColor = "bg-sky-500";
  } else {
    backgroundColor = "bg-emerald-700";
  }
  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      className={`bg-white max-w-[90%] mx-auto rounded-lg px-5 py-5 relative h-40 my-3 border-l-4 ${borderColor}`}
    >
      <div {...listeners} className="absolute inset-0 cursor-grab "></div>

      {/* Edit */}
      <div
        className="absolute top-2 right-3 cursor-pointer z-10"
        onClick={handleEdit}
      >
        <FaRegEdit size={20} />
      </div>

      <h5 className="text-black font-semibold text-lg my-1">{taskHead}</h5>
      <p className="text-gray-500 font-medium text-sm mb-1">{taskDes}</p>

      <p
        className={`absolute bottom-2 right-3 bg-amber-600 rounded-md text-white font-semibold px-3 py-1 ${backgroundColor}`}
      >
        {priorty}
      </p>

      {/* Delete */}
      <p
        className="absolute bottom-2 left-3 cursor-pointer z-10"
        onClick={handleDelete}
      >
        <MdDelete size={25} />
      </p>
    </div>
  );
}

export default EachCard;
