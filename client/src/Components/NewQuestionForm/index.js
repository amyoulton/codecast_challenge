import React from 'react';
import './NewQuestionForm.css';

function NewQuestionForm(props) {
  const { newQuestionData, updateQuestionData } = props;

  function handleSubmit(event) {
    event.preventDefault();
    props.createQuestion();
  }

  function handleQuestionInput(event) {
    const { currentTarget } = event;
    const { value, name } = currentTarget;
    updateQuestionData({ [name]: value });
  }

  return (
    <div className="NewQuestionForm">
      <div className="NewQuestionForm-box">
        <div className="NewQuestionForm-header">
          <h1 className="NewQuestionForm-caption">Ask A Question</h1>
        </div>
        <form className="NewQuestionForm-form" onSubmit={handleSubmit}>
          <div className="NewQuestionForm-field">
            <label htmlFor="title">Question Title:</label>
            <br />
            <textarea
              className="NewQuestionForm-title"
              name="title"
              id="title"
              value={newQuestionData.title}
              onChange={handleQuestionInput}
              required
            ></textarea>
          </div>
          <div className="NewQuestionForm-field">
            <label htmlFor="body">Content:</label>
            <br />
            <textarea
              className="NewQuestionForm-body"
              name="body"
              id="body"
              value={newQuestionData.body}
              onChange={handleQuestionInput}
            ></textarea>
          </div>
          <br />
          <input className="NewQuestionForm-btn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default NewQuestionForm;
