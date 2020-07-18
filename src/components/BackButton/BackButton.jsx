import React from 'react'
import { useHistory } from 'react-router-dom'
import { BackIcon } from '../icons/BackIcon'
import { Row, Col } from 'antd'
import './BackButton.scss'

export const BackButton = ({home}) => {
  const history = useHistory()
  const goBack = () => history.goBack()
  const goHome = () => history.push('/')

  return (
    <Row className="row">
      <Col span={24}>
          <button className="back_button" onClick={home ? goHome : goBack}>
            <span>
              <BackIcon />
            </span>
            Назад
          </button>
      </Col>
    </Row>
  )
}