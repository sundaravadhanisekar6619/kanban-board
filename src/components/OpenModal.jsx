import { useContext } from "react";
import { ContextData } from "../context/ContextData";
import { IoIosCloseCircle } from "react-icons/io";

function OpenModal() {
  const modalData = useContext(ContextData);

  const { setOpen, cards, selectedId, updateTask } = modalData;

  //cards [{},{}] so find the matched id

  if (selectedId === null) return;

  const matchedTask = cards.find((card) => card.id === selectedId);
  //console.log("matchedTask", matchedTask);
  if (!matchedTask) return;

  function handleEdit(e) {
    // console.log(e.target.value);
    const { name, value } = e.target;
    updateTask({ ...matchedTask, [name]: value });
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <section className="max-w-screen max-h-screen bg-gray-200 absolute top-0 left-0 w-screen h-screen overflow-hidden z-999">
        <div
          className="cursor-pointer absolute top-2 right-7"
          onClick={handleClose}
        >
          <IoIosCloseCircle size={40} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[100%] w-[600px]  mx-auto px-10 py-10">
          <div className="shadow-xl bg-violet-500 py-5 px-8 max-w-full mx-auto w-full h-auto rounded-xl">
            <div className=" my-3">
              <label className="text-xl font-semibold text-white mb-2 inline-block">
                Task Heading :-
              </label>
              <br />
              <input
                name="taskHead"
                className="border-2 border-white rounded-sm inline-block px-2 py-2 w-full outline-none mb-2 text-base text-white"
                value={matchedTask.taskHead}
                onChange={handleEdit}
              ></input>
            </div>
            <div className=" my-3">
              <label className="text-xl font-semibold text-white mb-2 inline-block">
                Task Description :-
              </label>
              <br />
              <textarea
                name="taskDes"
                value={matchedTask.taskDes}
                onChange={handleEdit}
                className=" text-base text-white border-2 border-white rounded-sm inline-block px-2 py-2  w-full outline-none mb-2 h-35"
              ></textarea>
            </div>

            <div>
              <label className="text-xl font-semibold text-white mb-2 inline-block">
                Priority :-
              </label>{" "}
              <br />
              <select
                name="priorty"
                value={matchedTask.priorty}
                onChange={handleEdit}
                className=" outline-none border-2 w-[25%] border-white px-2 py-2 rounded-sm text-base text-white"
              >
                <option value="low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="text-center mt-7">
              <button
                className="inline-block text-white text-xl border-2 border-white rounded-md px-10 py-2 font-semibold"
                onClick={handleClose}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OpenModal;
