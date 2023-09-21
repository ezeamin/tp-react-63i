import { useRef, useState } from 'react';

import Task from '../components/Ejercicio4/Task';

import { generateRandomId } from '../helpers/helpers';
import { useEffect } from 'react';

const Ejercicio5 = () => {
  // Traer las tareas del local storage
  const tasksLS = JSON.parse(localStorage.getItem('tasks')) || [];

  // Usarlas como valor inicial para el estado
  const [tasks, setTasks] = useState(tasksLS);

  // Utilizo un ref para no controlar el elemento
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Traer el input para acceder a su valor
    const taskInput = inputRef.current;

    // Solo si la tarea no está vacía
    if (taskInput.value) {
      setTasks((state) => [...state, { id: generateRandomId(), text: taskInput.value }]);
      taskInput.value = '';
    }
  };

  // Ejecutar cada vez que cambie tasks
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <section className='bg-light py-3 px-5 rounded text-dark'>
      <h1 className='text-center mb-0'>Bienvenido</h1>
      <p className='text-center'>(con local storage)</p>
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
export default Ejercicio5;
