import React, { Component } from 'react';
import * as api from '../api';

export default class CommentForm extends Component {
  state = {
    body: '',
    newComment: false,
    err: false
  }

  render() {
    const { currentUser } = this.props
    return (
      <div>
        <button onClick={this.newCommentSwitch} disabled={currentUser === 'guest'}>Post New Comment</button>
        {currentUser === 'guest' && <><br /> Please log in to comment.</>}
        {this.state.newComment &&
          <form onSubmit={this.handleSubmit}>
            <textarea
              required
              value={this.state.body}
              name="newcomment"
              cols="60"
              rows="10"
              onChange={this.handleChange}
            ></textarea>
            <button type="submit">Submit</button>
          </form>}
      </div>
    )
  }

  handleChange = (event) => {
    this.setState({ body: event.target.value })
  }

  handleSubmit = (event) => {
    const { currentUser, articleid } = this.props;
    const { body } = this.state;
    event.preventDefault()
    api.postComment(articleid, currentUser, body)
      .then(({ comment }) => {
        this.props.newComment(comment)
      })
    this.setState({ body: '', newComment: false })
  }

  newCommentSwitch = () => {
    this.setState(currentstate => {
      return { newComment: !currentstate.newComment }
    })
  }
}
