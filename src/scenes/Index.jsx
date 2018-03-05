import React from "react";
import {Col, IconText, Row} from "antd"
import NavMenu from "./Project/NavMenu/ProjectNavMenuContainer"
import {Route, Switch} from "react-router-dom"
import Projects from "./Project/ProjectsContainer"
import Project from "./Project/ProjectContainer"

export default class Index extends React.Component {


  render() {

    return <Row>
      <Col xs={7} className='pr-4'>
        <NavMenu/>
      </Col>
      <Col xs={15}>
          <Route exact path='/' component={Projects}/>
      </Col>
    </Row>
  }
}
