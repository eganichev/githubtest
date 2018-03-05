import React from "react";
import {getProjects} from "./projects.action"
import {connect} from "react-redux"
import {Alert, Card, IconText, List, Tag} from "antd"
import CenteredSpin from "../../components/CenteredSpin"

@connect(store => store.projectsReducer)
export default class ProjectsContainer extends React.Component {

  componentDidMount() {
    this.props.dispatch(getProjects())
  }

  render() {
    const {projects, loading,errors} = this.props
    if (loading) return <CenteredSpin/>
    if (errors) return <Alert message={errors.message} type="error"/>

    return <Card>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={projects}
        renderItem={project => (
          <List.Item>
            <h5><a href={project.html_url}>{project.name}</a></h5>
            <article>{project.description}</article>
            <div className='mt-3'>
              {project.language ? <Tag>{project.language}</Tag> : null}
            </div>
          </List.Item>
        )}
      />
    </Card>

  }
}
