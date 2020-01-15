import axios from 'axios'

const baseUrl = 'https://samb-ncnews.herokuapp.com/api/'

export const getTopics = () => {
  return axios.get(`${baseUrl}topics`)
    .then(res => {
      return res.data;
    })
}

export const getArticles = (topic = '', order = 'desc', author = '', sort_by = 'created_at') => { //redundant defaults?
  return axios.get(`${baseUrl}articles`, {
    params: {
      topic: topic,
      order: order,
      author: author,
      sort_by: sort_by
    }
  })
    .then(res => {
      return res.data;
    })
}

export const getArticleById = (id) => {
  return axios.get(`${baseUrl}articles/${id}`)
    .then(res => {
      return res.data;
    })
}

export const getCommentsById = (id) => {
  return axios.get(`${baseUrl}articles/${id}/comments`)
    .then(({ data }) => {
      return data
    })
}

export const getUserByUsername = (username) => {
  return axios.get(`${baseUrl}users/${username}`)
    .then(({ data }) => {
      return data
    })
}

export const postComment = (id, author, body) => {
  return axios.post(`${baseUrl}articles/${id}/comments`, {
    username: author,
    body: body
  })
    .then(({ data }) => {
      return data;
    })
}

export const deleteCommentById = (id) => {
  return axios.delete(`${baseUrl}comments/${id}`)
}