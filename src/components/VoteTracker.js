import React, { Component } from 'react'
import * as api from '../api'

export default class VoteTracker extends Component {
  state = {
    modifier: 0
  }
  render() {
    const { modifier } = this.state
    const { rating, currentUser } = this.props
    return (
      <div>
        <p>Rating: {rating + modifier}</p>
        <button className='Upvote' onClick={() => this.handleUpVote()} disabled={currentUser === 'guest'}>upvote</button>
        <button className='Downvote' onClick={() => this.handleDownVote()} disabled={currentUser === 'guest'}>downvote</button>
        <br /> {currentUser === 'guest' && <>Please log in to vote</>}
      </div>
    )
  }

  handleUpVote = () => {
    const { modifier } = this.state;
    const { voteChange } = this;
    if (modifier === 1) {
      voteChange(0, -1)
    } else if (modifier === 0) {
      voteChange(1, 1)
    } else {
      voteChange(1, 2)
    }
  }

  handleDownVote = () => {
    const { modifier } = this.state;
    const { voteChange } = this
    if (modifier === -1) {
      voteChange(0, 1)
    } else if (modifier === 0) {
      voteChange(-1, -1)
    } else {
      voteChange(-1, -2)
    }
  }

  voteChange = (newModifier, serverVoteChange) => {
    const { id, type } = this.props
    this.setState({ modifier: newModifier })
    api.patchVoteById(type, id, serverVoteChange)
  }
}
