import {GET_PROJECTS, GET_PROJECT, GET_PROJECT_CONTRIBUTORS} from "./projects.action"

const initialState = {
  loading: false,
  errors:null,
  projects: [],
  project: null,
  contributors: [],

};

export default (state = initialState, {type, payload}) => {
  switch (type) {

    case GET_PROJECTS + "_PENDING":
      return {
        ...state,
        loading: true,
      }
    case GET_PROJECTS + "_FULFILLED":
      const projectsSorted = payload.sort((a, b) => a.watchers - b.watchers)
      return {
        ...state,
        projects: projectsSorted,
        loading: false,

      }
    case GET_PROJECTS + "_REJECTED":
      return {
        ...state,
        errors: payload,
        loading: false
      }




    case GET_PROJECT + "_PENDING":
      return {
        ...state,
        loading: true,
      }
    case GET_PROJECT + "_FULFILLED":
      return {
        ...state,
        project: payload,
        loading: false,

      }
    case GET_PROJECT + "_REJECTED":
      return {
        ...state,
        errors: payload,
        loading: false
      }




    case GET_PROJECT_CONTRIBUTORS + "_PENDING":
      return {
        ...state,
        loading: true,
      }
    case GET_PROJECT_CONTRIBUTORS + "_FULFILLED":
      return {
        ...state,
        contributors: payload,
        loading: false,

      }
    case GET_PROJECT_CONTRIBUTORS + "_REJECTED":
      return {
        ...state,
        errors: payload,
        loading: false
      }




    default: {
      return state;
    }
  }
};
