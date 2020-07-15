import React, { useEffect, useState } from 'react'
import moment from 'moment'
import 'antd/dist/antd.css'
import './Tasks.scss'
import { Row, Col, Progress,  Input } from 'antd'
import { TaskSteps } from '../TaskSteps/TaskSteps'
import { BackButton } from '../BackButton/BackButton'
import { PersonIcon } from '../icons/PersonIcon'
import { CustomSelect } from '../CustomSelect/CustomSelect'
import { InfoTask } from '../InfoTask/InfoTask'
import { Button } from '../Button/Button'
import { EXPERT } from '../../const/expert'
import { Data } from '../../const/tasks'
import { StepTime } from '../StepTime/StepTime'
import getTaskTime  from '../../libs/getTaskTime'
import getStepsTime from '../../libs/getStepsTime'


const { TextArea } = Input;
const FORMAT = "DD.MM.YYYY hh:mm"

export const Tasks = () => {

  const [currentTask, setCurrentTask] = useState('')
  const [percent, setTimePercent] = useState('')

  useEffect(() => {
    setCurrentTask(Data[0])
  },[])
  useEffect(() => {
    setCurrentTask(Data[0])
    function setTime (task) {
      const currentDate = moment()
      const createdDate = moment(task.taskCreated, FORMAT)
      setTimePercent((currentDate.diff(createdDate, 'hours') * 100) / task.taskTime)
    }
    setTime(currentTask)
  }, [currentTask])
  return (
    <>
    <BackButton prevPage="/" />
    <h2>{currentTask.task}</h2>
    <Row>
      <Col span={20}>
        <p className="task_description">{currentTask.taskDescription}</p>
      </Col>
      <Col span={4} className="center">
        <p className="task_description">Время на задачу</p>
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
      <StepTime timeSteps={getStepsTime(currentTask.taskTime)} currentStep={currentTask.currentStep} />
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