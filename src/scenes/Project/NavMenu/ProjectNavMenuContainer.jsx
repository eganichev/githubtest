import React from "react";
import NavMenu from "./NavMenu"
import {getProjects} from "../projects.action"
import CenteredSpin from "../../../components/CenteredSpin"
import {connect} from "react-redux"
import {Alert} from "antd"

@connect(store=>store.projectsReducer)
export default class ProjectsContainer extends React.Component {

  componentDidMount() {
    this.props.dispatch(getProjects())
  }

  render() {
    const {projects, loading,errors} = this.props
    if (loading) return <CenteredSpin/>
    if (errors) return <Alert message={errors.message} type="error"/>


    return <NavMenu projects={projects}/>

  }
}
