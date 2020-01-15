import React, { Component } from 'react'
import ArticleCard from './ArticleCard'
import * as api from '../api'
import SortPanel from './SortPanel'

export default class ArticleList extends Component {
  state = {
    articles: [],
    loading: true,
    error: false, // todo
    author: '',
    authorInput: '', // do I actually need this?
    sortBy: 'created_at',
    order: 'desc'
  }

  componentDidMount() {
    const { topic } = this.props
    const { author, sortBy, order } = this.state
    this.fetchArticles(topic, order, author, sortBy)
  }

  componentDidUpdate(prevprops, prevstate) {
    const { topic } = this.props
    const { order, author, sortBy } = this.state
    if (prevprops.topic !== topic || prevstate.order !== order || prevstate.author !== author || prevstate.sortBy !== sortBy) {
      this.fetchArticles(topic, order, author, sortBy)
    }
  }

  render() {
    return (
      < div >
        <SortPanel
          sortingParams={this.getSortingParams}
          submit={this.getAuthorSubmit}
          author={this.state.author}
          order={this.state.order}
          sortBy={this.state.sortBy}
          authorInput={this.state.authorInput}
        />
        {this.state.loading && <p>Loading...</p>}
        {this.state.articles.map(article => {
          return <ArticleCard key={article.article_id} article={article} />
        })}
      </div >
    )
  }

  fetchArticles = (topic, order, author, sortBy) => {
    console.log(author)
    api.getArticles(topic, order, author, sortBy)
      .then(({ articles }) => {
        this.setState({ articles, loading: false })
      })
      .catch(err => {
        console.log(err)
      })
  }
  getSortingParams = (sortingParams) => {
    this.setState(sortingParams)
  }

  getAuthorSubmit = () => {
    this.setState(currentState => {
      return { author: currentState.authorInput, authorInput: '' }
    })
  }
}