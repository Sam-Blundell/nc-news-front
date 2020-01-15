import React from 'react';
import { Link } from '@reach/router';

export default function ArticleCard({ article }) {
  return (
    <Link to={`/article/${article.article_id}`} >
      <ul>
        <li>Title: {article.title}</li>
        <li>author: {article.author}</li>
        <li></li>
      </ul>
    </Link>
  )
}
