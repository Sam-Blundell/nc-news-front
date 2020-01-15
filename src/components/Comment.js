import React from 'react';
import { Link } from '@reach/router';

export default function Comment({ comment }) {
  const { author, body, created_at, votes } = comment
  return (
    <div>
      <ul>
        <Link to={`/user/${author}`}>
          <li>From: {author}</li>
        </Link>
        <time>At: {created_at}</time>
        <p>{body}</p>
        <li>Rating: {votes}</li>
      </ul>
    </div>
  )
}