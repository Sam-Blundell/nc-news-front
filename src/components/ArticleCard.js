import React from 'react';
import { Link } from '@reach/router';

export default function ArticleCard({ article }) {
  const { article_id, title, created_at, author, votes, topic, comment_count } = article
  return (
    <ul>
      <Link to={`/article/${article_id}`} >
        <li>Title: {title}</li>
      </Link>
      <li>Posted at: {created_at}</li>
      <li>Author: {author}</li>
      <li>Topic: {topic}</li>
      <li>Votes: {votes} Number of comments: {comment_count}</li>

    </ul>
  )
}
