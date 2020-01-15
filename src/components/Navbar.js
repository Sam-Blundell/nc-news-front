import React from 'react'
import { Link } from '@reach/router'

export default function Navbar() {
  return (
    <nav>
      <Link to='/'>
        <button>Home</button>
      </Link>
      <Link to='/topics'>
        <button>Topics</button>
      </Link>
    </nav>
  )
}
