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

export const getArticle = (id) => {
  return axios.get(`${baseUrl}articles/${id}`)
    .then(res => {
      return res.data;
    })
}