import React, { FC, ReactElement } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";
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
const App: FC<{}> = (): ReactElement => {
  return (
    <>
      <Header title="Totally Tubular Task Table"></Header>
      <div className="App">
        <TaskList tasks={[{ title: "Pony", isCompleted: false }]}></TaskList>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
