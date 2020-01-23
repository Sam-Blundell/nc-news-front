import React from 'react'

export default function SortPanel(props) {
  const { sortingParams, authorInput } = props;
  return (
    <form className='SortForm' onSubmit={(event) => {
      event.preventDefault()
      return props.submit()
    }}><br />
      <div className='AuthorSort'>
        <label >Search by author:<br />
          <input
            type="text"
            value={authorInput}
            onChange={(event) => sortingParams({ authorInput: event.target.value })}
          />
        </label>
        <button type="submit">Search</button>
      </div>
      <div className='ParameterSort'>
        <label>Sort By: <></>
          <select onChange={(event) => sortingParams({ sortBy: event.target.value })}>
            <option value="created_at">Date</option>
            <option value="author">Author</option>
            <option value="title">Title</option>
            <option value="votes">Vote Count</option>
            <option value="comment_count">Comment Count</option>
          </select>
        </label>
      </div>
      <div className='OrderSort'>
        <label>Order: <></>
          <select onChange={(event) => sortingParams({ order: event.target.value })}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </label>
      </div>
    </form>
  )
}