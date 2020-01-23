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
    authorInput: '',
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
      this.setState({ error: null })
    }
  }

  render() {
    const { order, sortBy, authorInput, error, loading, articles } = this.state;
    const { currentUser, topic } = this.props;
    return (
      < div >

        <SortPanel
          sortingParams={this.getSortingParams}
          submit={this.getAuthorSubmit}
          order={order}
          sortBy={sortBy}
          authorInput={authorInput}
        />

        <div>
          {error && <ErrorPage error={this.state.error} />}
        </div>



        <div className='ArticleView'>
          {(loading) && (!error) && <p>Loading...</p>}
          {topic && !error && !loading && <h4>Viewing articles for topic: {topic}</h4>}
          {
            articles.map(article => {
              return <ArticleCard
                key={article.article_id}
                article={article}
                currentUser={currentUser}
              />
            })
          }
        </div >

      </div>
    )
  }

  fetchArticles = (topic, order, author, sortBy) => {
    api.getArticles(topic, order, author, sortBy)
      .then(({ articles }) => {
        this.setState({ articles, loading: false })
      })
      .catch(({ response }) => {
        this.setState({ error: response, loading: false })
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