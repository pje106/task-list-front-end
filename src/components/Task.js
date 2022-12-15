import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  const taskId = props.id;
  const taskTitle = props.title;
  const isComplete = props.isComplete;
  const updateComplete = props.updateComplete;

  // const [complete, setComplete] = useState(props.isComplete);

  const buttonClass = isComplete ? {updateComplete(taskId, isComplete)} : updateComplete(taskId, isComplete);

  function changeIsComplete() {
      updateComplete(taskId, iscomplete)
    }
  

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => setComplete(!isComplete)}
      >
        {props.title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  updateComplete: PropTypes.func.isRequired
};

export default Task;
