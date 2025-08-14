import { useContext } from "react";
import { ContextData } from "../context/ContextData";
import EachCard from "./EachCard";
import { useDroppable } from "@dnd-kit/core";

function Boards() {
  const { cards } = useContext(ContextData);
  //console.log("cards", cards); //[{},{}]
  const todocards = cards.filter((card) => card.status === "Todo");
  //console.log("todo cards", todocards);
  const inProgressCards = cards.filter((card) => card.status === "InProgress");
  //console.log("inProgressCards", inProgressCards);
  const doneCards = cards.filter((card) => card.status === "Done");
  //console.log(doneCards);

  const { setNodeRef: setTodoRef } = useDroppable({
    id: "Todo",
  });
  const { setNodeRef: setInProgressRef } = useDroppable({ id: "InProgress" });
  const { setNodeRef: setDoneRef } = useDroppable({
    id: "Done",
  });

  return (
    <div className="grid grid-cols-3 xl:max-w-[90%] lg:max-w-[100%] xl:gap-10 lg:gap-5 gap-5 mt-8 h-screen max-w-[95%] mx-auto  max-h-[calc(100vh-100px)]">
      <div
        ref={setTodoRef}
        className=" shadow-2xl bg-gray-200 flex flex-col pb-5 rounded-sm h-[90%] max-h-[90%] "
      >
        <h3 className="text-white font-bold text-xl bg-red-500 text-center rounded-sm py-2 flex justify-center items-center gap-x-2">
          Todo
          {todocards.length <= 0 ? (
            ""
          ) : (
            <span className="bg-fuchsia-700 rounded-full text-white text-sm inline-block w-5 text-center h-5 ">
              {todocards.length}
            </span>
          )}
        </h3>

        <div className="overflow-y-auto max-h-[calc(100vh-70px)] p-2">
          {todocards.length <= 0 ? (
            <p className="text-gray-500 text-sm italic text-center mt-4">
              Your board is empty — let’s add your first task!
            </p>
          ) : (
            <div>
              {todocards.map((card, i) => (
                <EachCard card={card} key={i} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 2 */}

      <div
        ref={setInProgressRef}
        className=" shadow-xl bg-gray-200 flex flex-col pb-5 rounded-sm h-[90%] max-h-[90%] "
      >
        <h3 className="text-white font-bold text-xl bg-yellow-500  text-center rounded-sm py-2 flex justify-center items-center gap-x-2">
          InProgress
          {inProgressCards.length <= 0 ? (
            ""
          ) : (
            <span className="bg-fuchsia-700 rounded-full text-white text-sm inline-block w-5 text-center h-5 ">
              {inProgressCards.length}
            </span>
          )}
        </h3>
        <div className="overflow-y-auto  overflow-x-hidden max-h-[calc(100vh-70px)] p-2">
          {inProgressCards.length <= 0 ? (
            <p className="text-gray-500 text-sm italic text-center mt-4">
              Your board is empty — let’s add your first task!
            </p>
          ) : (
            <div>
              {inProgressCards.map((card, i) => (
                <EachCard card={card} key={i} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 3 */}
      <div
        ref={setDoneRef}
        className=" shadow-xl bg-gray-200 flex flex-col pb-5 rounded-sm h-[90%] max-h-[90%]"
      >
        <h3 className="text-white font-bold text-xl bg-green-500 text-center rounded-sm py-2 flex justify-center items-center gap-x-2">
          Done
          {doneCards.length <= 0 ? (
            ""
          ) : (
            <span className="bg-fuchsia-700 rounded-full text-white text-sm inline-block w-5 text-center h-5 ">
              {doneCards.length}
            </span>
          )}
        </h3>
        <div className="overflow-y-auto max-h-[calc(100vh-70px)] p-2">
          {doneCards.length <= 0 ? (
            <p className="text-gray-500 text-sm italic text-center mt-4">
              Your board is empty — let’s add your first task!
            </p>
          ) : (
            <div>
              {doneCards.map((card, i) => (
                <EachCard card={card} key={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Boards;
