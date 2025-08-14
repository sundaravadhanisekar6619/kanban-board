import { useContext, useState } from "react";
import { ContextData } from "../context/ContextData";

function AddTask() {
  const taskValue = useContext(ContextData);
  const [add, setAdd] = useState(false);
  const {
    taskHead,
    taskDes,
    status,
    priorty,
    handleHeading,
    handleDes,
    handleStatus,
    handlePriorty,
    OnsubmitTask,
    setTaskHead,
    setTaskDes,
    setStatus,
    setPriorty,
  } = taskValue;

  function handleSubmit(e) {
    e.preventDefault();
    if (!taskHead || !taskDes || !status || !priorty) return;
    const newtask = { id: Date.now(), taskHead, taskDes, status, priorty };
    OnsubmitTask(newtask);
    setTaskHead("");
    setTaskDes("");
    setStatus("");
    setPriorty("");
  }

  function handleAdd() {
    setAdd(true);
  }

  return (
    <div
      className="flex-1 
    "
    >
      {add ? (
        <form
          onSubmit={handleSubmit}
          className="flex justify-items-end items-center gap-2 max-w-[70%] xl:max-w-[70%] lg:max-w-[85%] md:max-w-[95%] lg:gap-3 ml-auto mr-0
          "
        >
          <div className="flex-1 min-w-[140px]">
            <input
              type="name"
              placeholder="Task Name..."
              value={taskHead}
              onChange={handleHeading}
              className="border-2 px-2 py-2 rounded-sm text-sm w-full outline-none font-Robot font-sm font-semibold"
            />
          </div>
          <div className="flex-1 min-w-[140px]">
            <input
              type="name"
              placeholder="Task description..."
              value={taskDes}
              onChange={handleDes}
              className="border-2 px-2 py-2 rounded-sm text-sm 
             self-center w-full outline-none font-Robot text-sm font-semibold"
            />
          </div>
          <select
            value={priorty}
            onChange={handlePriorty}
            className="border-2 px-2 py-2 rounded-sm text-sm font-Robot text-sm font-semibold min-w-[100px]"
          >
            <option value=""> priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <select
            onChange={handleStatus}
            value={status}
            className="border-2 px-2 py-2 rounded-sm font-Robot text-sm font-semibold min-w-[100px]"
          >
            <option value="">Select Status</option>
            <option value="Todo">Todo</option>
            <option value="InProgress">InProgress</option>
            <option value="Done">Done</option>
          </select>
          <button className="inline-block bg-amber-800 outline-none font-semibold text-white text-sm px-5 py-2 rounded-sm">
            Add Task
          </button>
        </form>
      ) : (
        <div className="flex justify-end">
          <button
            onClick={handleAdd}
            className=" inline-block bg-rose-700 text-white text-base px-5 py-2 rounded-sm"
          >
            Add Task
          </button>
        </div>
      )}
    </div>
  );
}

export default AddTask;
