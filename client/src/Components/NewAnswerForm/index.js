import React from 'react';
import './NewAnswerForm.css';

function NewAnswerForm(props) {
  const { newAnswerData, updateAnswerData } = props;

  function handleSubmit(event) {
    event.preventDefault();
    props.createAnswer();
  }

  function handleAnswerInput(event) {
    const { currentTarget } = event;
    const { value, name } = currentTarget;
    updateAnswerData({ [name]: value });
  }

  return (
    <div className="NewAnswerForm">
      <div className="NewAnswerForm-card">
        <form className="NewAnswerForm-form" onSubmit={handleSubmit}>
          <div className="NewAnswerForm-field">
            <label htmlFor="body">New Answer:</label>
            <br />
            <textarea
              className="NewAnswerForm-body"
              name="body"
              id="body"
              value={newAnswerData.body}
              onChange={handleAnswerInput}
            ></textarea>
          </div>
          <br />
          <input className="NewAnswerForm-btn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default NewAnswerForm;
