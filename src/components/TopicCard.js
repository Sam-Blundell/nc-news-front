import React from 'react'
import { Link } from '@reach/router'

export default function TopicCard(props) {
  const { slug, description } = props.topic
  return (
    <ul>
      <Link to={`/topic/${slug}`}>
        <li>{slug}</li>
      </Link>
      <li>{description}</li>
    </ul>
  )
}