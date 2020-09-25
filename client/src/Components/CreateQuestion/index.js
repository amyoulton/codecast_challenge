import React, { Component } from 'react';
import NewQuestionForm from '../NewQuestionForm';
import { Question } from '../../requests';

class NewQuestionPage extends Component {
  constructor(props) {
    super();
    this.state = {
      newQuestionData: {
        title: '',
        body: '',
      },
    };
    this.createQuestion = this.createQuestion.bind(this);
    this.updateQuestionData = this.updateQuestionData.bind(this);
  }

  createQuestion() {
    const params = {
      question: {
        title: this.state.newQuestionData.title,
        body: this.state.newQuestionData.body,
      },
    };
    Question.create(params).then((question) => {
      this.props.updateQuestion(question);
      this.setState(() => {
        return {
          newQuestionData: {
            title: '',
            body: '',
          },
        };
      });
    });
  }

  updateQuestionData(props) {
    this.setState((state) => {
      return {
        newQuestionData: {
          ...state.newQuestionData,
          ...props,
        },
      };
    });
  }

  render() {
    return (
      <main className="NewQuestionPage">
        <NewQuestionForm
          createQuestion={this.createQuestion}
          newQuestionData={this.state.newQuestionData}
          updateQuestionData={this.updateQuestionData}
        />
      </main>
    );
  }
}

export default NewQuestionPage;
