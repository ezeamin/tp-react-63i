const Task = (props) => {
  const { task, setTasks } = props;

  const handleDelete = () => {
    setTasks((state) => state.filter((t) => t.id !== task.id));
  };

  return (
    <li className='list-group-item d-flex align-items-center justify-content-between'>
      <p className='mb-0'>{task.text}</p>
      <button className='btn btn-danger rounded' onClick={handleDelete}>
        X
      </button>
    </li>
  );
};
export default Task;
