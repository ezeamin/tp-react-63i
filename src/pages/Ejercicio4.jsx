import { useRef, useState } from 'react';

import Task from '../components/Ejercicio4/Task';

import { generateRandomId } from '../helpers/helpers';

const Ejercicio4 = () => {
  const [tasks, setTasks] = useState([]);

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Traer el input y su valor
    const taskInput = inputRef.current;
    const task = taskInput.value;

    // Solo si la tarea no está vacía
    if (task) {
      setTasks((state) => [...state, { id: generateRandomId(), text: task }]);
      taskInput.value = '';
    }
  };

  return (
    <section className='bg-light py-3 px-5 rounded text-dark'>
      <h1 className='text-center'>Bienvenido</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='task-input' className='form-label'>
          Ingresa tus tareas
        </label>
        <div className='d-flex gap-1'>
          <input
            type='text'
            placeholder='Comprar pan'
            id='task-input'
            className='form-control'
            ref={inputRef}
          />
          <button type='submit' className='btn btn-primary'>
            &gt;
          </button>
        </div>
      </form>
      <hr />
      <ul className='list-group'>
        {tasks.length === 0 && <p className='text-center'>No hay tareas :(</p>}
        {tasks.map((task) => (
          <Task key={task.id} task={task} setTasks={setTasks} />
        ))}
      </ul>
    </section>
  );
};
export default Ejercicio4;
