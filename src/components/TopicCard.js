import React from 'react'
import { Link } from '@reach/router'

export default function TopicCard(props) {
  const { slug, description } = props.topic
  return (
    <ul className='TopicCard'>
      <Link to={`/topic/${slug}`}>
        <h3>{slug}</h3>
      </Link>
      <p>{description}</p>
    </ul>
  )
}