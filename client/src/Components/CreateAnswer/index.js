import React, { Component } from 'react';
import NewAnswerForm from '../NewAnswerForm';
import { Answer } from '../../requests';

class NewAnswerPage extends Component {
  constructor(props) {
    super();
    this.state = {
      newAnswerData: {
        body: '',
      },
    };
    this.createAnswer = this.createAnswer.bind(this);
    this.updateAnswerData = this.updateAnswerData.bind(this);
  }

  createAnswer() {
    const params = {
      answer: {
        body: this.state.newAnswerData.body,
      },
    };
    Answer.create(this.props.id, params).then((question) => {
      this.props.updateQuestionAnswer(this.props.id);
      this.setState((state) => {
        return {
          newAnswerData: {
            body: '',
          },
        };
      });
    });
  }

  updateAnswerData(props) {
    this.setState((state) => {
      return {
        newAnswerData: {
          ...state.newAnswerData,
          ...props,
        },
      };
    });
  }

  //   updateQuestion() {
  //     Question.get(this.props.id).then((question) => {
  //       this.setState((state) => {
  //         return {
  //           question,
  //           isLoading: false,
  //         };
  //       });
  //     });
  //   }

  render() {
    return (
      <main className="NewAnswerPage">
        <NewAnswerForm
          createAnswer={this.createAnswer}
          newAnswerData={this.state.newAnswerData}
          updateAnswerData={this.updateAnswerData}
        />
      </main>
    );
  }
}

export default NewAnswerPage;
