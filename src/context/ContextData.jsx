import { createContext, useEffect, useState } from "react";

export const ContextData = createContext();

export function ContextProvider({ children }) {
  //add task state
  const [taskHead, setTaskHead] = useState("");
  const [taskDes, setTaskDes] = useState("");
  const [status, setStatus] = useState("");
  const [priorty, setPriorty] = useState("");
  const [cards, setCards] = useState(() => {
    const res = localStorage.getItem("storeCards");
    console.log(res);
    return res ? JSON.parse(res) : [];
  });

  //open modal
  const [open, setOpen] = useState(false);

  //on click on edit
  const [selectedId, setSelectedId] = useState(null);

  //local storage to set data
  useEffect(() => {
    localStorage.setItem("storeCards", JSON.stringify(cards));
  }, [cards]);

  function handleHeading(e) {
    setTaskHead(e.target.value);
    // console.log(taskHead);
  }
  function handleDes(e) {
    setTaskDes(e.target.value);
    // console.log(taskDes);
  }
  function handleStatus(e) {
    setStatus(e.target.value);
  }
  function handlePriorty(e) {
    setPriorty(e.target.value);
  }

  function OnsubmitTask(newtask) {
    console.log(newtask);
    setCards((cards) => [...cards, newtask]);
  }

  //edit
  function updateTask(updatedValue) {
    console.log("updatedValue", updatedValue);
    setCards((cards) =>
      cards.map((ce) => (ce.id === updatedValue.id ? updatedValue : ce))
    );
  }

  //remove card
  function removeCard(id) {
    console.log("remove id", id);
    setCards((cards) => cards.filter((eachCard) => eachCard.id !== id));
  }

  return (
    <ContextData.Provider
      value={{
        taskHead,
        taskDes,
        status,
        priorty,
        setTaskHead,
        setTaskDes,
        setStatus,
        setCards,
        setPriorty,
        handleHeading,
        handleDes,
        handleStatus,
        handlePriorty,
        OnsubmitTask,
        cards,
        open,
        setOpen,
        selectedId,
        setSelectedId,
        updateTask,
        removeCard,
      }}
    >
      {children}
    </ContextData.Provider>
  );
}
