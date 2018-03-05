export const GET_PROJECTS = 'GET_PROJECTS'
export const GET_PROJECT = 'GET_PROJECT'
export const GET_PROJECT_CONTRIBUTORS = 'GET_PROJECT_CONTRIBUTORS'

import * as API from '../../services/api/index'

export const getProjects = () => ({
  type: GET_PROJECTS,
  payload: API.getProjects()
})

export const getProject = (name) => ({
  type: GET_PROJECT,
  payload: API.getProject(name)
})

export const getContributorsForProject = (name) => ({
  type: GET_PROJECT_CONTRIBUTORS,
  payload: API.getContributorsForProject(name)
})


