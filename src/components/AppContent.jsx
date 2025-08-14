import AddTask from "./AddTask";
import Boards from "./Boards";
import OpenModal from "./OpenModal";
import { useContext } from "react";
import { ContextData } from "../context/ContextData";
import { DndContext } from "@dnd-kit/core";
import { MdAutoGraph } from "react-icons/md";
function AppContent() {
  const { open, setCards } = useContext(ContextData);

  function handleDragEnd(event) {
    const { over, active } = event;

    if (over) {
      setCards((prev) =>
        prev.map((card) =>
          card.id === active.id ? { ...card, status: over.id } : card
        )
      );
    }
  }

  return (
    <div>
      <main
        className="px-5 pb-5 py-5 h-screen max-w-screen relative overflow-x-hidden overflow-y-auto
       max-h-screen bg-gray-200 "
      >
        <div className="max-w-[100%] ">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-black flex gap-2 ">
              <span>
                <MdAutoGraph size={32} />
              </span>
              Kanban Board
            </h1>

            <AddTask />
          </div>

          <DndContext onDragEnd={handleDragEnd}>
            <Boards />
          </DndContext>
        </div>
        {open && <OpenModal />}
      </main>
    </div>
  );
}

export default AppContent;
// max-w-screen mx-auto
