import React from 'react'
import { Link } from 'react-router-dom'
import { BackIcon } from '../icons/BackIcon'
import { Row, Col } from 'antd'
import './BackButton.scss'

export const BackButton = ({prevPage}) => {
  return (
    <Row className="row">
      <Col span={24}>
        <Link to={prevPage}>
          <button className="back_button">
            <span>
              <BackIcon />
            </span>
            Назад
          </button>
        </Link>
      </Col>
    </Row>
  )
}