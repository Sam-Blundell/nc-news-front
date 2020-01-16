import React, { Component } from 'react'
import * as api from '../api'
import Comment from './Comment'
import CommentForm from './CommentForm'

export default class FullArticle extends Component {
  state = {
    article: {},
    comments: [],
  }

  componentDidMount() {
    const { articleid } = this.props;
    this.fetchArticle(articleid)
    this.fetchComments(articleid)
  }

  render() {
    // console.log(this)
    const { title, author, created_at, body } = this.state.article
    const { articleid, currentUser } = this.props
    return (
      < div >
        <h2>{title}</h2>
        <h3>Author: {author}</h3>
        <h5>Posted at: {created_at}</h5>

        <main>{body}</main>
        <h5>Comments:</h5>
        <CommentForm articleid={articleid} newComment={this.newComment} currentUser={currentUser} />
        {this.state.comments.map(comment => {
          return <Comment
            key={comment.comment_id}
            comment={comment}
            removeComment={this.removeComment}
            currentUser={currentUser}
          />
        })}
      </div >
    )
  }

  fetchArticle = (id) => {
    api.getArticleById(id)
      .then(({ article }) => {
        this.setState({ article })
      })
  }

  fetchComments = (id) => {
    api.getCommentsById(id)
      .then(({ comments }) => {
        this.setState({ comments })
      })
  }

  newComment = (comment) => {
    this.setState(currentState => {
      return { comments: [comment, ...currentState.comments] } //why doesn't push work here?
    })
  }

  removeComment = (id) => {
    api.deleteCommentById(id)
    this.setState(currentstate => {
      return ({ comments: currentstate.comments.filter(comment => comment.comment_id !== id) })
    })
  }
}