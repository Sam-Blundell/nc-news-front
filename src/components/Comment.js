import React from 'react';
import { Link } from '@reach/router';
import VoteTracker from './VoteTracker';
import timeStampFormatter from '../utils'

export default function Comment(props) {
  const { author, body, created_at, votes, comment_id } = props.comment;
  const { removeComment, currentUser } = props;
  return (
    < div >
      <ul>
        <Link to={`/user/${author}`}>
          <li>From: {author}</li>
        </Link>
        <time>Posted: {timeStampFormatter(created_at)}</time>
        <p>{body}</p>
        <VoteTracker rating={votes} id={comment_id} type={'comments'} currentUser={currentUser} />
        {currentUser === author && <button onClick={() => removeComment(comment_id)}>Delete Comment</button>}
      </ul>
    </div >
  )
}