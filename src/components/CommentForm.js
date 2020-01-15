import React, { Component } from 'react';
import * as api from '../api';

export default class CommentForm extends Component {
  state = {
    author: 'jessjelly',
    body: '',
    newComment: false,
    err: false
  }

  render() {
    return (
      <div>
        <button onClick={this.newCommentSwitch}>Post New Comment</button>
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
    event.preventDefault()
    api.postComment(this.props.articleid, this.state.author, this.state.body)
    this.setState({ body: '' })
  }

  newCommentSwitch = () => {
    this.setState(currentstate => {
      return { newComment: !currentstate.newComment }
    })
  }
}
