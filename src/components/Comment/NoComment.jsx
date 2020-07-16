import React from 'react'
import { Row, Col} from 'antd'
import { PersonIcon } from '../icons/PersonIcon'
import './Comment.scss'

const classNames = require('classnames');

export const NoComment = ({comment}) => {

  const infoComment = () => {
    if (comment) {
      return (
        <div className="comment_info">
          <p className="name">
            {comment.userName}
          </p>
          <p>
            {comment.date}
          </p>
        </div>
      )
    }
    return null
  }
  return (
    <Row className="row">
      <Col span={24}>
        <div className="no_comment">
          {infoComment()}
          <span>
            <PersonIcon />
          </span>
          <span className={classNames(comment ? 'comment_text': '')}>{comment ? comment.text : 'Коментарии еще не добавлены'}</span>
        </div>
      </Col>
    </Row>
  )
}