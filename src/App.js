import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { TtLogo } from './components/icons/TtLogo'
import { CheckIcon } from './components/icons/CheckIcon'
import { UsersIcon } from './components/icons/UserIcon'
import { ObjectIcon } from './components/icons/ObjectIcon'
import { SettingsIcon } from './components/icons/SettingsIcon'
import { LEFT_MENU } from './const/leftMenu'
import { Tasks } from './components/Tasks/Tasks'
import { Users } from './components/Users/Users'
import { Objects } from './components/Objects/Objects'
import { Settings } from './components/Settings/Settings'
import { NoFound } from './components/NoFound/NoFound'
import {
  Route,
  Switch,
  useHistory,
  useLocation
} from 'react-router-dom'
import { Home } from './components/Home/Home'
import { User } from './components/User/User'

const { Content, Sider } = Layout;

const SELECTED_COLOR = '#189EE9'

const App = () => {
  let location = useLocation()
  console.log(location)
  const [selectMenu, setSelectMenu] = useState(location.pathname.replace('/', ''));

  let history = useHistory()

  const clickMenu = (selected) => {
    const id = LEFT_MENU.find(item => item.id === selected.key).id
    setSelectMenu(id)
    history.push('/' + id)
  }

  const getIcon = (item) => {
    switch(item.icon) {
      case 'checkIcon': return <CheckIcon fill={selectMenu === item.id ? SELECTED_COLOR : ''}  />
      case 'objectIcon': return <ObjectIcon fill={selectMenu === item.id ? SELECTED_COLOR : ''}  />
      case 'usersIcon': return <UsersIcon fill={selectMenu === item.id ? SELECTED_COLOR : ''}  />
      case 'settingsIcon' : return <SettingsIcon fill={selectMenu === item.id ? SELECTED_COLOR : ''}  />
      default: return null
    }
  }

  const getMenuItem = () => {
    return LEFT_MENU.map(item => {
      return (
        <Menu.Item key={item.id}
                    icon={
                          <span className="anticon">
                            {getIcon(item)}
                          </span>
                    }
                    onClick={clickMenu}
                    id={item.id}
        >
          {item.title}
        </Menu.Item>
      )
    })
  }

  return (
  // <Layout className="wrapper">
    <Layout>
      <Sider width={200} className="site-layout-background" theme="light">
        <div className="logo header">
          <TtLogo />
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={[selectMenu]}
          style={{ height: '100%', borderRight: 0 }}
          className="menu"
        >
          {getMenuItem()}
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}
              className="content"
      >
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Content
          className="site-layout-background"
          style={{
            padding: 32,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/object">
            <Objects />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/tasks">
            <Tasks />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoFound />
          </Route>
        </Switch>
        </Content>
      </Layout>
    </Layout>
  // </Layout>
  );
}

export default App;