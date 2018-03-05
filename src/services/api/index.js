import axios from 'axios'
import to from '../to'

axios.defaults.headers.common['Accept'] = 'application/vnd.github.v3+json'

export const API_URL = 'https://api.github.com'


const get = async (url) => await to(axios.get(API_URL + url))
const post = async (url, data) => await to(axios.post(API_URL + url, data))
const put = async (url, data) => await to(axios.put(API_URL + url, data))


export const getProjects = async () => {

  const [err, response] = await get('/users/facebook/repos')
  if (err) throw err


  return response.data
}

export const getProject = async (name) => {

  const [err, response] = await get('/repos/facebook/' + name)
  if (err) throw err


  return response.data
}

export const getContributorsForProject = async (name) => {

  const [err, response] = await get('/repos/facebook/' + name + '/contributors')
  if (err) throw err


  return response.data
}
const request = {get, post, put}
