import React, { useEffect, useState, useCallback } from 'react'
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
import { SHOW_TIME_TOOL_TIP } from '../../const/const'
import './User.scss'

const classNames = require('classnames')

export const User = () => {
  const { userId } = useParams()
  const dispatch = useDispatch()
  const users = useShallowEqualSelector(state => state.usersState.users)
  const selectedUser = useShallowEqualSelector(state => state.usersState.currentUser)
  const [showToolTip, setShowToolTip] = useState(false)
  const [timerId, setTimerId] = useState(null)

  useEffect(() => {
    dispatch(setCurrentUser(userId))
  },[userId, dispatch, users])

  useEffect(() => {
    return timerId ? () => clearTimeout(timerId) : ()=>{}
  },[timerId])

  const show = useCallback(() => {
    const isShow = () => {
      if (!showToolTip) {
        setShowToolTip(true)
        setTimerId(setTimeout(() => {
          setShowToolTip(false)
          setTimerId(null)
        }, SHOW_TIME_TOOL_TIP))
      }
    }
    isShow()
    return () => clearTimeout(timerId)
  }, [showToolTip, timerId])

  return (
    <>
      <BackButton prevPage={"/users"} />
      <Row className="row">
        <Col span={22}>
          <h2 className="user_header">{selectedUser.name}</h2>
        </Col>
        <Col span={2} className="user_header-btn">
          <div className={classNames(showToolTip ? "tool_tip" : "tool_tip-close")}>
            Редактировать
          </div>
          <Link to={`/update/${selectedUser.key}`} onMouseEnter={show}>
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