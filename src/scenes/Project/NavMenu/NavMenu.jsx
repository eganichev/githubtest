import React from "react";

import {Menu, Tag} from 'antd';
import {Link} from "react-router-dom"

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class NavMenu extends React.Component {


  render() {
    const {projects} = this.props

    return <Menu mode="inline">
      {projects.map((project, key) =>
          <Menu.Item url={project.url} key={key} className='d-flex justify-content-between align-items-center'>
            <div style={{maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis'}}>
              <Link to={project.name}>{project.name}</Link>
            </div>
            <Tag>{project.watchers}</Tag>
          </Menu.Item>)}
    </Menu>

  }
}
