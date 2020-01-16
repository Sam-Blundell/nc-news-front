import axios from 'axios'

const NCNews = axios.create({
  baseURL: 'https://samb-ncnews.herokuapp.com/api/'
});

export const getTopics = () => {
  return NCNews.get('topics')
    .then(({ data }) => {
      return data;
    })
}

export const getArticles = (topic, order, author, sort_by) => {
  return NCNews.get('articles', {
    params: {
      topic: topic,
      order: order,
      author: author,
      sort_by: sort_by
    }
  })
    .then(({ data }) => {
      return data;
    })
}

export const getArticleById = (id) => {
  return NCNews.get(`articles/${id}`)
    .then(({ data }) => {
      return data;
    })
}

export const getCommentsById = (id) => {
  return NCNews.get(`articles/${id}/comments`)
    .then(({ data }) => {
      return data
    })
}

export const getUserByUsername = (username) => {
  return NCNews.get(`users/${username}`)
    .then(({ data }) => {
      return data
    })
}

export const postComment = (id, author, body) => {
  return NCNews.post(`articles/${id}/comments`, {
    username: author,
    body: body
  })
    .then(({ data }) => {
      return data;
    })
}

export const deleteCommentById = (id) => {
  return NCNews.delete(`comments/${id}`)
}

//type can be article or comment
export const patchVoteById = (type, id, vote) => {
  return NCNews.patch(`${type}/${id}`, {
    inc_votes: vote
  })
}