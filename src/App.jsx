import { useEffect, useState } from "react";
import TaskForm from "./components/taskForm/TaskForm";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import TaskList from "./components/taskList/TaskList";
import { task as data } from "./helpers/tasks";
import { useForm } from "./hooks/useForm";
import { validate } from "./helpers/validate";

function App() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("");
  const { form, changed } = useForm({});

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (task) => {
    const { title, description } = task;
    const msg = validate(title, description);

    if (msg.type === "Error") {
      return setMessage(msg.body.message);
    }

    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title,
        description,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    const res = confirm("Esta seguro que desea eliminar la tarea?");
    res ? setTasks(tasks.filter((task) => task.id != taskId)) : null;
  };

  return (
    <>
      <Header />
      <main className="main">
        <TaskList tasks={tasks} deleteTask={deleteTask} />
        <section>
          <TaskForm
            form={form}
            changed={changed}
            createTask={createTask}
            message={message}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
