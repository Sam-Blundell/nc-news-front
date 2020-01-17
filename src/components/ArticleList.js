import React, { Component } from 'react'
import ArticleCard from './ArticleCard'
import * as api from '../api'
import SortPanel from './SortPanel'
import ErrorPage from './ErrorPage'

export default class ArticleList extends Component {
  state = {
    articles: [],
    loading: true,
    error: null,
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
    const { topic } = this.props;
    const { order, author, sortBy } = this.state;
    const topicChanged = prevprops.topic !== topic;
    const orderChanged = prevstate.order !== order;
    const authorChanged = prevstate.author !== author;
    const sortByChanged = prevstate.sortBy !== sortBy;
    if (topicChanged || orderChanged || authorChanged || sortByChanged) {
      this.fetchArticles(topic, order, author, sortBy)
    }
  }

  render() {
    const { author, order, sortBy, authorInput, error, loading, articles } = this.state;
    const { currentUser } = this.props;
    return (
      < div >
        <SortPanel
          sortingParams={this.getSortingParams}
          submit={this.getAuthorSubmit}
          author={author}
          order={order}
          sortBy={sortBy}
          authorInput={authorInput}
        />
        <div>
          {error && <ErrorPage error={this.state.error} />}
        </div>
        {(loading) && (!error) && <p>Loading...</p>}
        {articles.map(article => {
          return <ArticleCard
            key={article.article_id}
            article={article}
            currentUser={currentUser}
          />
        })}
      </div >
    )
  }

  fetchArticles = (topic, order, author, sortBy) => {
    api.getArticles(topic, order, author, sortBy)
      .then(({ articles }) => {
        this.setState({ articles, loading: false })
      })
      .catch(({ response }) => {
        this.setState({ error: response })
      })
  }
  getSortingParams = (sortingParams) => {
    this.setState(sortingParams)
  }

  getAuthorSubmit = () => {
    this.setState(currentState => {
      return { author: currentState.authorInput, authorInput: '', error: null }
    })
  }
}