import React, { Component } from 'react'
import ArticleCard from './ArticleCard'
import * as api from '../api'

export default class ArticleList extends Component {
  state = {
    articles: [],
    loading: true,
    error: false,
    author: '',
    sortBy: 'created_at',
    order: 'desc'
  }

  componentDidMount() {
    const { topic } = this.props
    const { author, sortBy, order } = this.state
    this.fetchArticles(topic, order, author, sortBy)
  }

  componentDidUpdate(prevprops) {
    if (prevprops.topic !== this.props.topic) {
      this.fetchArticles(this.props.topic)
    }
  }

  render() {
    return (
      < div >
        <form> sort order: <br />
          <label>Descending
            <input type="radio" name="order" value="desc" />
          </label> <br />
          <label>Ascending
            <input type="radio" name="order" value="asc" />
          </label>
        </form>

        {this.state.loading && <p>Loading...</p>}
        {this.state.articles.map(article => {
          return <ArticleCard key={article.article_id} article={article} />
        })}
      </div >
    )
  }

  fetchArticles = (topic, order, author, sortBy) => {
    api.getArticles(topic, order, author, sortBy)
      .then(({ articles }) => {
        this.setState({ articles, loading: false })
      })
  }
}