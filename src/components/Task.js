import PropTypes from 'prop-types';
import React from 'react';

import './Task.css';

const Task = (props) => {
  const taskId = props.id;
  const taskTitle = props.title;
  const isComplete = props.isComplete;
  const updateComplete = props.updateComplete;
  const deleteTask=props.deleteTask;

  function changeComplete(complete) {
    updateComplete(taskId, complete);
  }

  // const [complete, setComplete] = useState(props.isComplete);

  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => changeComplete(!isComplete)}
      >
        {props.title}
      </button>

      <button onClick={() => deleteTask(taskId)} className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  updateComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;
