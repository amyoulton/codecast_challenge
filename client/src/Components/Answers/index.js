import React, { Component } from 'react';
import Comments from '../Comments';
import { Answer } from '../../requests';
import { Accordion } from 'react-bootstrap';
import './Answers.css';

class Answers extends Component {
  constructor(props) {
    super();
    this.state = {
      answers: [],
      isLoading: true,
    };
    this.deleteAnswer = this.deleteAnswer.bind(this);
  }

  deleteAnswer(question_id, id) {
    Answer.destroy(question_id, id).then(() => {
      this.props.updateFromDeleteAnswers(question_id);
      this.setState((state) => {
        const newAnswers = [...state.answers].filter((answer) => {
          return answer.id !== id;
        });
        return {
          answers: newAnswers,
        };
      });
    });
  }
  render() {
    const answers = this.props.answers;
    return (
      <div className="Answers">
        {answers.map((answer) => (
          <Accordion className="Answers-card" key={answer.id}>
            <div className="Answers-box">
              <h3 className="Answers-body">{answer.body}</h3>
              <Accordion.Toggle
                className="Answers-card-button"
                variant="link"
                eventKey="1"
              >
                <div className="Answers-buttonholder">Comments</div>
              </Accordion.Toggle>
              <button
                className="Answers-delete-button"
                onClick={() => {
                  this.deleteAnswer(answer.question_id, answer.id);
                }}
              >
                Delete
              </button>
              <Accordion.Collapse eventKey="1">
                <div className="Answers-comments-card">
                  <Comments comments={answer.comments} />
                </div>
              </Accordion.Collapse>
            </div>
          </Accordion>
        ))}
      </div>
    );
  }
}

export default Answers;
