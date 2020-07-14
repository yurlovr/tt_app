import React from 'react'
import 'antd/dist/antd.css'
import './Tasks.scss'
import { Row, Col, Progress,  Input } from 'antd'
import { TaskSteps } from '../TaskSteps/TaskSteps'
import { TimerIcon } from '../icons/TimerIcon'
import { PersonIcon } from '../icons/PersonIcon'
import { CustomSelect } from '../CustomSelect/CustomSelect'
import { Button } from '../Button/Button'

const { TextArea } = Input;

export const Tasks = () => {
  return (
    <>
    <h2>Назначить сотрудника для проведения внеплановой проверки</h2>
    <Row>
      <Col span={20}>
        <p>Не корректные показания</p>
      </Col>
      <Col span={4} className="center">
        <p>Время на задачу</p>
      </Col>
    </Row>
    <Row>
        <Col span={20}>
          <Progress percent={33}
                    strokeColor={"#17B45A"}
                    strokeWidth={4}
                    showInfo={false}
          />
        </Col>
      <Col span={4}
            className="task_time center">
        <p>36д 12ч</p>
      </Col>
      </Row>
      <Row>
        <Col span={24}>
      <div className="timer">
        <span>
          <TimerIcon />
        </span>
        <span>Время на этап: 36д 12ч (до 6.12.19)</span>
      </div>
    </Col>
    </Row>
    <Row>
      <Col span={24}>
        <div className="select_block">
          <p className="label">
            Исполнитель
          </p>
          <div className="wrapper">
            <div className="select">
              <CustomSelect  placeholder="Выберите исполнителя"/>
            </div>
            <div className="buttons">
              <Button type="primary">Завершить этап</Button>
            </div>
            </div>
          </div>
      </Col>
    </Row>
    <Row>
      <Col flex="1 1 200px">
        <section className="comment">
          <h2>Комментарии к задаче</h2>
          <div className="comment_input">
            <PersonIcon/>
            <TextArea autoSize />
          </div>
          <div className="buttons">
            <Button type="secondary" disabled>Добавить комментарий</Button>
          </div>
        </section>
        <section className="info">
          <h2>Подробная информация</h2>
        </section>
      </Col>
      <Col flex="0 1 300px">
        <TaskSteps />
      </Col>
    </Row>
    </>
  )
}