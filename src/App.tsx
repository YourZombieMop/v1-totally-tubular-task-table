import React, {
  Context,
  FC,
  ReactElement,
  useState,
  Dispatch,
  SetStateAction
} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Task } from "./types/Task";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
/**
 * This App should:
 *  - Input a task
 *  - Add the task to a list
 *  - Display the list of tasks
 *  - Allow for completing a task
 *  - Allow for deleting a task
 *  - Add Completed tasks to a done list
 *
 * Extras:
 *  - Style the App
 *  - Edit an existing task
 */

interface ListContextAttributes {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}
const ListContext: Context<ListContextAttributes> = React.createContext({
  tasks: [],
  setTasks: () => {}
});

const App: FC<{}> = (): ReactElement => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Pony", isCompleted: false, isDeleted: false }
  ]);
  return (
    <>
      <Header title="Totally Tubular Task Table"></Header>
      <main className="App">
        <ListContext.Provider value={{ tasks, setTasks }}>
          <TaskList />
        </ListContext.Provider>
      </main>
      <Footer copysign="Matthew Boyea"></Footer>
    </>
  );
};

export default App;
export { ListContext };
