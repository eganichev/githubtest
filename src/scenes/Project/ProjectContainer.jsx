import React from "react";
import {getContributorsForProject, getProject} from "./projects.action"
import {connect} from "react-redux"
import {Alert, Avatar, Card, IconText, List} from "antd"
import CenteredSpin from "../../components/CenteredSpin"

@connect(store => store.projectsReducer)
export default class ProjectsContainer extends React.Component {

  componentDidMount() {
    const name = this.props.match.params.name
    this.props.dispatch(getProject(name))
    this.props.dispatch(getContributorsForProject(name))

  }

  render() {
    const {project, contributors, loading, errors} = this.props
    if (loading) return <CenteredSpin/>

    if (errors) return <Alert message={errors.message} type="error"/>
    if (!project) return null

    return <Card>

      <a href={project.html_url}>{project.name}</a>

      <List
        itemLayout="horizontal"
        size="large"
        dataSource={contributors}
        renderItem={contributor => (
          <List.Item className='d-flex'>
            <List.Item.Meta
              avatar={<Avatar src={contributor.avatar_url}/>}
              title={<a href={contributor.html_url}>{contributor.login}</a>}
              description={contributor.contributions + " contributions"}
            />
          </List.Item>
        )}
      />
    </Card>

  }
}
