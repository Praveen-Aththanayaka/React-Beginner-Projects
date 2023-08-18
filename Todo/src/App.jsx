import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: input,
        completed: false,
        isEditing: false,
      };

      setTasks([...tasks, newTask]);
      setInput('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleEdit = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  const updateTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText, isEditing: false } : task
      )
    );
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Todo List</h1>
        </div>
        <form className="input_field" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add a Todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <div className="todo_list">
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <input type="checkbox" />
                {task.isEditing ? ( 
                  <input
                    type="text"
                    value={task.text}
                    onChange={(e) => updateTask(task.id, e.target.value)}
                    className="label_input"
                  />
                ) : (
                  <label>{task.text}</label>
                )}
                {task.isEditing ? (
                  <button
                    className="update"
                    onClick={() => updateTask(task.id, task.text)}
                  >
                    Save
                  </button>
                ) : (
                  <button className="update" onClick={() => toggleEdit(task.id)}>
                    Update
                  </button>
                )}
                <button className="delete" onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
