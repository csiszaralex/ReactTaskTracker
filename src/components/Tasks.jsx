import Task from './Task.jsx';

function Tasks({ tasks, onDelete }) {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </>
  );
}

export default Tasks;
