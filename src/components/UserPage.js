import React, { Component } from 'react'
import * as api from '../api';
import ArticleCard from './ArticleCard';
import ErrorPage from './ErrorPage';

export default class UserPage extends Component {
  state = {
    user: {},
    articles: [],
    loading: true,
    error: false
  }

  componentDidMount() {
    const { username } = this.props;
    this.fetchUser(username)
    this.fetchUserArticles(username)
  }

  render() {
    const { loading, articles, error } = this.state;
    const { username, name, avatar_url } = this.state.user
    const { currentUser } = this.props
    return (
      <div>
        {loading && !error && <p>Loading {this.props.username}'s profile...</p>}
        {error && <ErrorPage error={error} />}
        {!loading && !error && <>
          <h3>User page for {username}</h3>
          <p>Name: {name} </p>
          <img src={avatar_url} alt="" />
          <p>{username}'s articles:</p>
          {articles.map(article => {
            return <ArticleCard
              key={article.article_id}
              article={article}
              currentUser={currentUser}
            />
          })}
        </>}
      </div>
    )
  }

  fetchUser = (username) => {
    api.getUserByUsername(username)
      .then(({ user }) => {
        this.setState({ user, loading: false })
      })
      .catch(({ response }) => {
        this.setState({ error: response })
      })
  }

  fetchUserArticles = (username) => {
    api.getArticles('', 'desc', username)
      .then(({ articles }) => {
        this.setState({ articles })
      })
      .catch(res => { return null })
  }
}
