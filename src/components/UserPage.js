import React, { Component } from 'react'
import * as api from '../api';
import ArticleCard from './ArticleCard';

export default class UserPage extends Component {
  state = {
    user: {},
    articles: [],
    Loading: true
  }

  componentDidMount() {
    this.fetchUser(this.props.username)
    this.fetchUserArticles(this.props.username)
  }

  render() {
    const { username, name, avatar_url } = this.state.user
    return (
      <div>
        {this.state.Loading && <p>Loading...</p>}
        <h3>User page for {username}</h3>
        <p>Name: {name} </p>
        <img src={avatar_url} alt="" />
        <p>{username}'s articles:</p>
        {this.state.articles.map(article => {
          return <ArticleCard article={article} />
        })}
      </div>
    )
  }

  fetchUser = (username) => {
    api.getUserByUsername(username)
      .then(({ user }) => {
        this.setState({ user, Loading: false })
      })
  }

  fetchUserArticles = (username) => {
    api.getArticles('', 'desc', username)
      .then(({ articles }) => {
        this.setState({ articles })
      })
  }
}
