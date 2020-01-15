import React from 'react'

export default function SortPanel(props) {
  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      return props.submit()
    }}><br />
      <div>
        <label>Search for articles by a specific author:
              <input
            type="text"
            value={props.authorInput}
            onChange={(event) => props.sortingParams({ authorInput: event.target.value })}
          />
        </label>
        <button type="submit">Submit</button>
      </div>
      <div>
        <label>Sort By:
          <select onChange={(event) => props.sortingParams({ sortBy: event.target.value })}>
            <option value="created_at">Date</option>
            <option value="author">Author</option>
            <option value="title">Title</option>
            <option value="votes">Vote Count</option>
            <option value="comment_count">Comment Count</option>
          </select>
        </label>
      </div>
      <div>
        <label>in
          <select onChange={(event) => props.sortingParams({ order: event.target.value })}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
          order
        </label>
      </div>
    </form>
  )
}