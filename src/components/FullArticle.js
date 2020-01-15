import React, { Component } from 'react'
import * as api from '../api'

export default class FullArticle extends Component {
  state = {
    article: {}
  }

  componentDidMount() {
    this.fetchArticle(this.props.articleid)
  }

  render() {
    return (
      < div >
        <h2>{this.state.article.title}</h2>
        <h3>Author: {this.state.article.author}</h3>
        <time>date: {this.state.article.created_at}</time>
        <main>{this.state.article.body}</main>
        <section>comments will go here</section>
      </div >
    )
  }

  fetchArticle = (id) => {
    api.getArticle(id)
      .then(({ article }) => {
        this.setState({ article })
      })
  }
}
