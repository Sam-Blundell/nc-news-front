import React from 'react';
import { Link } from '@reach/router';
import VoteTracker from './VoteTracker';
import timeStampFormatter from '../utils'

export default function ArticleCard({ article, currentUser }) {
  const { article_id, title, created_at, author, votes, topic, comment_count } = article
  return (
    <ul className='ArticleCard'>
      <Link to={`/article/${article_id}`} >
        <li>Title: {title}</li>
      </Link>
      <li>Posted: {timeStampFormatter(created_at)}</li>
      <li>Author: {author}</li>
      <li>Topic: {topic}</li>
      <li>Number of comments: {comment_count}</li>
      <VoteTracker
        rating={votes}
        id={article_id}
        type={'articles'}
        currentUser={currentUser}
      />
    </ul>
  )
}
