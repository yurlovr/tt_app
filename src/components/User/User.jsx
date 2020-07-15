import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { USERS } from '../../const/users'
import { EllipsisBtnIcon } from '../icons/EllipsisBtnIcon'
import { Row, Col } from 'antd'
import { InfoTask } from '../InfoTask/InfoTask'
import { UserTaskInfo } from '../UserTaskInfo/UserTaskInfo'
import { Data } from '../../const/tasks'
import './User.scss'

export const User = () => {
  const { userId } = useParams()
  const [selectedUser, setSelectedUser] = useState('');
  useEffect(() => {
    const user = USERS.find(u => u.key === userId)
    setSelectedUser(user)
  },[userId])
  return (
    <>
      <Row className="row">
        <Col span={22}>
          <h2 className="user_header">{selectedUser.name}</h2>
        </Col>
        <Col span={2} className="user_header-btn">
          <EllipsisBtnIcon width='48px' height='48px' />
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
        <UserTaskInfo task={Data.find(t => t.userId = userId)}
                      stepTime={'Время на этап: 14д. 12 ч.'}
        />
      </Col>
    </Row>
    </>
  )
}