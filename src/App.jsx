import React, { useState } from 'react'
import useShallowEqualSelector from './hooks/useShallowEqualSelector'
import 'antd/dist/antd.css'
import './App.scss'
import { Layout, Menu } from 'antd'
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
import { UpdateUser } from './components/UpdateUser/UpdateUser'
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  Redirect
} from 'react-router-dom'
import { Home } from './components/Home/Home'
import { User } from './components/User/User'
import { AuthBlock } from './components/AuthBlock/AuthBlock'

const { Content, Sider } = Layout;

const SELECTED_COLOR = '#189EE9'

const App = () => {
  let location = useLocation()
  const [selectMenu, setSelectMenu] = useState(location.pathname.replace('/', ''))
  const users = useShallowEqualSelector(state => state.usersState.users)

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
    <Layout>
      <Sider width={220} className="site-layout-background" theme="light">
        <div className="logo header">
          <TtLogo />
        </div>
        <AuthBlock />
        <Menu
          mode="inline"
          defaultSelectedKeys={[selectMenu]}
          style={{ borderRight: 0 }}
          className="menu"
        >
          {getMenuItem()}
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}
              className="content"
      >
        <Content
          className="site-layout-background"
          style={{
            padding: 32,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Switch>
          <Route path="/settings" exact>
            <Settings />
          </Route>
          <Route path="/object" exact>
            <Objects />
          </Route>
          <Route path="/users" exact>
            <Users />
          </Route>
          <Route path="/user/:userId">
            {!users || !users.length ? <Redirect to="/" /> : <User />}
          </Route>
          <Route path="/update/:userId">
            {!users || !users.length ? <Redirect to="/" /> : <UpdateUser />}
          </Route>
          <Route path="/tasks" exact>
            <Tasks />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <NoFound />
          </Route>
        </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;