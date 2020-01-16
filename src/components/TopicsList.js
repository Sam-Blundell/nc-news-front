import React, { Component } from 'react';
import TopicCard from './TopicCard';
import * as api from '../api';

export default class TopicsList extends Component {
  state = {
    topics: [],
    loading: true,
    error: null //currently this takes error info but the page redirects automatically
  }

  componentDidMount() {
    this.fetchTopics()
  }

  render() {
    const { loading, topics } = this.state;
    return (
      < div >
        {loading && <p>Loading...</p>}
        {topics.map(topic => {
          return <TopicCard key={topic.slug} topic={topic} />
        })}
      </div >
    )
  }

  fetchTopics = () => {
    api.getTopics()
      .then(({ topics }) => {
        this.setState({ topics, loading: false })
      })
      .catch(({ response }) => {
        this.setState({ error: response.error }) // works but has no effect on the user
      })
  }
}