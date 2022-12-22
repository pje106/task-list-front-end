import { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

const INITIAL_FORM_DATA = { title: '', description: '' };

const NewTaskForm = (props) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
  };

  const handleNewTaskSubmit = (e) => {
    e.preventDefault();
    props.addTaskCallbackFunc(formData);
  };

  return (
    <form onSubmit={handleNewTaskSubmit}>
      <label htmlFor="title">Title</label>
      <input
        name="title"
        type="text"
        value={formData.title}
        onChange={handleChange}
      />
      <label htmlFor="desription">Description</label>
      <input
        name="description"
        type="text"
        value={formData.description}
        onChange={handleChange}
      />
      <input type="submit" value="Add Task" />
    </form>
  );
};

NewTaskForm.propTypes = {
  addTaskCallbackFunc: PropTypes.func,
};

export default NewTaskForm;
