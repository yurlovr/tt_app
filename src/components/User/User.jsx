import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector'
import { setCurrentUser } from '../../store/actions/actionsUsers'
import { EllipsisBtnIcon } from '../icons/EllipsisBtnIcon'
import { Row, Col } from 'antd'
import { InfoTask } from '../InfoTask/InfoTask'
import { UserTaskInfo } from '../UserTaskInfo/UserTaskInfo'
import { BackButton } from '../BackButton/BackButton'
import './User.scss'

export const User = () => {
  const { userId } = useParams()
  const dispatch = useDispatch()
  const users = useShallowEqualSelector(state => state.usersState.users)
  const selectedUser = useShallowEqualSelector(state => state.usersState.currentUser)

  useEffect(() => {
    dispatch(setCurrentUser(userId))
  },[userId, dispatch, users])

  return (
    <>
      <BackButton prevPage={"/users"} />
      <Row className="row">
        <Col span={22}>
          <h2 className="user_header">{selectedUser.name}</h2>
        </Col>
        <Col span={2} className="user_header-btn">
          <Link to={`/update/${selectedUser.key}`}>
            <EllipsisBtnIcon width='48px' height='48px' />
          </Link>
        </Col>
      </Row>
      <Row className="row row_data">
        <Col span={24}>
          <p className="data">
            Общие данные
          </p>
        </Col>
      </Row>
      <Row>
      <Col flex="1 1 200px">
        <section className="user_info">
          <h2>Информация</h2>
          <InfoTask data={selectedUser.info}/>
        </section>
      </Col>
      <Col flex="0 1 300px">
        <UserTaskInfo tasks={selectedUser.openTasks}/>
      </Col>
    </Row>
    </>
  )
}