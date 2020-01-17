import React from 'react'
import { Link } from '@reach/router'

export default function Navbar(props) {
  return (
    <nav>
      <Link to='/'>
        <button>Home</button>
      </Link>
      <Link to='/topics'>
        <button>Topics</button>
      </Link>
      <label>You are currently using the site as:
        <select onChange={(event) => props.getUser(event.target.value)}>Login
          <option value="guest">guest</option>
          <option value="jessjelly">jessjelly</option>
          <option value="weegembump">weegembump</option>
          <option value="happyamy2016">happyamy2016</option>
        </select>
      </label>
    </nav>
  )
}
