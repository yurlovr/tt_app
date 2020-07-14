import React from 'react'
import 'antd/dist/antd.css'
import './Tasks.css'
import { Row, Col, Progress } from 'antd'
import { TaskSteps } from '../TaskSteps/TaskSteps'
import { TimerIcon } from '../icons/TimerIcon'

export const Tasks = () => {
  return (
    <>
    <h2>Назначить сотрудника для проведения внеплановой проверки</h2>
    <Row>
    <Col span={24}>
      <section className="task">
        <p>Не корректные показания</p>
        <p>Время на задачу</p>
      </section>
      <Progress percent={33}
                showInfo={"36д 12ч (до 6.12.19)"}
                strokeColor={"#17B45A"}
                strokeWidth={4}
      />
      <div className="timer">
        <span>
          <TimerIcon />
        </span>
        <span>Время на этап: 36д 12ч (до 6.12.19)</span>
      </div>
    </Col>
    </Row>
    <Row>
      <Col flex="1 1 200px">
        <h2>Комментарии к задаче</h2>
      </Col>
      <Col flex="0 1 300px">
        {TaskSteps()}
      </Col>
    </Row>
    </>
  )
}