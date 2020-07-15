import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import './Tasks.scss'
import { Row, Col, Progress,  Input } from 'antd'
import { TaskSteps } from '../TaskSteps/TaskSteps'
import { TimerIcon } from '../icons/TimerIcon'
import { PersonIcon } from '../icons/PersonIcon'
import { CustomSelect } from '../CustomSelect/CustomSelect'
import { InfoTask } from '../InfoTask/InfoTask'
import { Button } from '../Button/Button'
import { EXPERT } from '../../const/expert'
import { Data } from '../../const/tasks'
import getTaskTime  from '../../libs/getTaskTime'
import moment from 'moment'

const { TextArea } = Input;
const FORMAT = "DD.MM.YYYY hh:mm"

export const Tasks = () => {
  const stepsTime = (task) => {
    const oneStep = Math.floor(task.taskTime / 3)
    const twoStep = Math.floor(task.taskTime / 3)
    const threeStep = task.taskTime - oneStep - twoStep
    return {
      oneStep,
      twoStep,
      threeStep
    }
  }
  const [currentTask, setCurrentTask] = useState('')
  const [timeSteps, setTimeSteps] = useState('')
  const [percent, setTimePercent] = useState('')
  useEffect(() => {
    setCurrentTask(Data[0])
  },[])
  useEffect(() => {
    setCurrentTask(Data[0])
    function setTime (task) {
      const steps = stepsTime(task)
      const currentDate = moment()
      const createdDate = moment(task.taskCreated, FORMAT)
      setTimePercent((currentDate.diff(createdDate, 'hours') * 100) / task.taskTime)
      setTimeSteps(steps)
    }
    setTime(currentTask)
  }, [currentTask])
  return (
    <>
    <h2>{currentTask.task}</h2>
    <Row>
      <Col span={20}>
        <p>{currentTask.taskDescription}</p>
      </Col>
      <Col span={4} className="center">
        <p>Время на задачу</p>
      </Col>
    </Row>
    <Row>
        <Col span={20}>
          <Progress percent={percent}
                    strokeColor={"#17B45A"}
                    strokeWidth={4}
                    showInfo={false}
          />
        </Col>
      <Col span={4}
            className="task_time center">
        <p>{getTaskTime(currentTask.taskTime)}</p>
      </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="timer">
            <span>
              <TimerIcon />
            </span>
            <span>Время на этап: {getTaskTime(timeSteps.oneStep)}</span>
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
              <CustomSelect  placeholder="Выберите исполнителя"
                              options={EXPERT}
                              size={"large"}
                              width="98%"
                              showSearch
              />
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
          <InfoTask data={currentTask.info}/>
        </section>
      </Col>
      <Col flex="0 1 300px">
        <TaskSteps currentStep={currentTask.currentStep} />
      </Col>
    </Row>
    </>
  )
}