import "./TaskForm.css";

export default function TaskForm({ form, createTask, changed, message }) {
  const saveTask = (e) => {
    e.preventDefault();

    createTask(form);
  };

  return (
    <form onSubmit={saveTask} className="form">
      <h1>Crear Tarea</h1>
      <div className="container_input_form">
        <label htmlFor="title" className="label_form">
          Titulo
        </label>
        <input
          type="text"
          name="title"
          onChange={changed}
          placeholder="Ingrese un titulo..."
        />
      </div>
      <div className="container_input_form">
        <label htmlFor="description" className="label_form">
          Descripcion
        </label>
        <textarea
          name="description"
          onChange={changed}
          placeholder="Ingrese una descripcion de la tarea..."
        ></textarea>
      </div>
      <button type="submit" className="btn_save">
        Guardar
      </button>
      <h5>{message}</h5>
    </form>
  );
}
