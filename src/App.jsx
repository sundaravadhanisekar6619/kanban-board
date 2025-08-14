// import { ContextProvider } from "./context/ContextData";
// import AddTask from "./components/AddTask";
// import Boards from "./components/Boards";
// import OpenModal from "./components/OpenModal";
import AppContent from "./components/AppContent";
import { ContextProvider } from "./context/ContextData";

function App() {
  return (
    <ContextProvider>
      <AppContent />
    </ContextProvider>
  );
}

export default App;
