import React, { Component } from 'react';
import { Question } from '../../requests';
import Answers from '../Answers';
import CreateAnswer from '../CreateAnswer';
import CreateQuestion from '../CreateQuestion';
import './Questions.css';
import { Accordion } from 'react-bootstrap';
import what from './what.png';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
    this.updateQuestion = this.updateQuestion.bind(this);
    this.updateQuestionAnswer = this.updateQuestionAnswer.bind(this);
    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.updateFromDeleteAnswers = this.updateFromDeleteAnswers.bind(this);
  }

  updateQuestion(question) {
    Question.get(question.id).then((ques) => {
      console.log(ques);
      this.setState({
        questions: [ques, ...this.state.questions],
      });
      console.log(this.state);
    });
  }

  updateQuestionAnswer(id) {
    Question.get(id).then((ques) => {
      console.log('this is ques:', ques);
      this.setState({
        questions: [ques, ...this.state.questions],
      });
    });
  }

  updateFromDeleteAnswers(id) {
    Question.get(id).then((ques) => {
      console.log('this is ques:', ques);
      this.setState({
        questions: [ques],
      });
    });
  }

  deleteQuestion(id) {
    Question.destroy(id).then(() => {
      this.setState((state) => {
        const newQuestions = [...state.questions].filter((question) => {
          return question.id !== id;
        });
        return {
          questions: newQuestions,
        };
      });
    });
  }

  componentDidMount() {
    Question.index().then((questions) => {
      this.setState((state) => {
        return {
          questions,
        };
      });
    });
  }

  render() {
    const { questions } = this.state;
    return (
      <div className="Question">
        <div className="Question-color"></div>
        <div className="Question-formcontainer">
          <img src={what} alt="what" className="Question-img"></img>
          <CreateQuestion updateQuestion={this.updateQuestion} />
        </div>
        <div className="Question-container">
          {questions.map((question) => (
            <Accordion key={question.id}>
              <div className="Question-card">
                <h1 className="Question-title">{question.title}</h1>
                <p className="Question-body">{question.body}</p>
                <div className="Question-buttonholder">
                  <Accordion.Toggle
                    className="Question-card-button"
                    eventKey="0"
                  >
                    <div className="Question-btn">Answers</div>
                  </Accordion.Toggle>
                  <button
                    className="Question-delete-button"
                    onClick={() => {
                      this.deleteQuestion(question.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
                <Accordion.Collapse eventKey="0">
                  <div>
                    <div>
                      <CreateAnswer
                        id={question.id}
                        history={this.props.history}
                        updateQuestionAnswer={this.updateQuestionAnswer}
                      />
                    </div>
                    <div>
                      <Answers
                        answers={question.answers}
                        updateFromDeleteAnswers={this.updateFromDeleteAnswers}
                      />
                    </div>
                  </div>
                </Accordion.Collapse>
              </div>
            </Accordion>
          ))}
        </div>
      </div>
    );
  }
}

export default MainPage;
