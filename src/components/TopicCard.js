import React from 'react'
import { Link } from '@reach/router'

export default function TopicCard(props) {
  return (
    <Link to={`/topic/${props.topic.slug}`}>
      <ul>
        <li>Topic: {props.topic.slug}</li>
        <li>{props.topic.description}</li>
      </ul>
    </Link>
  )
}