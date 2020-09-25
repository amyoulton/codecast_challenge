import React, { Component } from 'react';
import './Comments.css';

class Comments extends Component {
  render() {
    const comments = this.props.comments;
    return (
      <div className="Comments">
        {comments.map((comment) => (
          <div className="Comments-card" key={comment.id}>
            <p className="Comments-body">{comment.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Comments;
