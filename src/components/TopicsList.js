import React, { Component } from 'react';
import TopicCard from './TopicCard';
import * as api from '../api';

export default class TopicsList extends Component {
  state = {
    topics: [],
    loading: true
  }

  componentDidMount() {
    this.fetchTopics()
  }

  render() {
    return (
      < div >
        {this.state.loading && <p>Loading...</p>}
        {this.state.topics.map(topic => {
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
  }
}