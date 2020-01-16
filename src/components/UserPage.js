import React, { Component } from 'react'
import * as api from '../api';
import ArticleCard from './ArticleCard';

export default class UserPage extends Component {
  state = {
    user: {},
    articles: [],
    loading: true
  }

  componentDidMount() {
    const { username } = this.props;
    this.fetchUser(username)
    this.fetchUserArticles(username)
  }

  componentDidUpdate(prevprops) {
    const { currentUser } = this.props;
    if (prevprops.currentUser !== currentUser) {

    }
  }

  render() {
    const { loading, articles } = this.state;
    const { username, name, avatar_url } = this.state.user
    const { currentUser } = this.props
    return (
      <div>
        {loading && <p>Loading {this.props.username}'s profile...</p>}
        <h3>User page for {username}</h3>
        <p>Name: {name} </p>
        <img src={avatar_url} alt="" />
        <p>{username}'s articles:</p>
        {articles.map(article => {
          return <ArticleCard article={article} currentUser={currentUser} />
        })}
      </div>
    )
  }

  fetchUser = (username) => {
    api.getUserByUsername(username)
      .then(({ user }) => {
        this.setState({ user, loading: false })
      })
  }

  fetchUserArticles = (username) => {
    api.getArticles('', 'desc', username)
      .then(({ articles }) => {
        this.setState({ articles })
      })
  }
}
