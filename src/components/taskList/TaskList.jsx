import Card from "../card/Card";
import "./TaskList.css";

function TaskList({ tasks, deleteTask }) {
  return (
    <section className="section_task">
      {tasks.length === 0 ? (
        <p>No hay tareas aun...</p>
      ) : (
        <div className="task_container">
          {tasks.map(({ id, title, description }, index) => {
            return (
              <Card
                key={index}
                id={id}
                title={title}
                description={description}
                deleteTask={deleteTask}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default TaskList;
