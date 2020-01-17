import React from 'react'

export default function ErrorPage(props) {
  const { status, data } = props.error;
  console.dir(props.error)
  return (
    <div>
      <p>{status} {data.msg ? data.msg.replace('slug', 'topic') : 'internal server error'}</p>
    </div>
  )
}