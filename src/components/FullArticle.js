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
    this.fetchArticle(this.props.articleid)
    this.fetchComments(this.props.articleid)
  }

  render() {
    const { title, author, created_at, body } = this.state.article
    const { articleid } = this.props
    return (
      < div >
        <h2>{title}</h2>
        <h3>Author: {author}</h3>
        <time>date: {created_at}</time>
        <main>{body}</main>
        <h5>Comments:</h5>
        <CommentForm articleid={articleid} />
        {this.state.comments.map(comment => {
          return <div>
            <Comment comment={comment} />
            <button onClick={() => this.removeComment(comment.comment_id)}>Delete comment</button>
          </div>
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

  removeComment = (id) => {
    api.deleteCommentById(id)
    this.setState(currentstate => {
      return ({ comments: currentstate.comments.filter(comment => comment.comment_id !== id) })
    })
  }
}