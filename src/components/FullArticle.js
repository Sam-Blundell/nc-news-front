import React, { Component } from 'react'
import * as api from '../api'
import Comment from './Comment'
import CommentForm from './CommentForm'
import timeStampFormatter from '../utils'
import ErrorPage from './ErrorPage'

export default class FullArticle extends Component {
  state = {
    article: {},
    comments: [],
    loading: true,
    error: false
  }

  componentDidMount() {
    const { articleid } = this.props;
    this.fetchArticle(articleid)
    this.fetchComments(articleid)
  }

  render() {
    const { loading, error } = this.state
    const { title, author, created_at, body } = this.state.article
    const { articleid, currentUser } = this.props
    return (
      < div >
        {error && <ErrorPage error={this.state.error} />}
        {(loading) && (!error) && <p>Loading...</p>}
        {!loading && <>
          <h2>{title}</h2>
          <h3>Author: {author}</h3>
          <h5>Posted: {timeStampFormatter(created_at)}</h5>

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
        </>}
      </div >
    )
  }

  fetchArticle = (id) => {
    api.getArticleById(id)
      .then(({ article }) => {
        this.setState({ article, loading: false })
      })
      .catch(({ response }) => {
        this.setState({ error: response })
      })
  }

  fetchComments = (id) => {
    api.getCommentsById(id)
      .then(({ comments }) => {
        this.setState({ comments })
      })
      .catch(res => { return null })
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