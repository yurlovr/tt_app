import React, {useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useFetch from '../../hooks/useFetch'
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector'
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
import { Comment } from '../Comment/Comment'
import { EXPERT } from '../../const/expert'
import { StepTime } from '../StepTime/StepTime'
import getTaskTime  from '../../libs/getTaskTime'
import getStepsTime from '../../libs/getStepsTime'
import { setAllTasks, setCurrentTask, setComment, setExpert } from  '../../store/actions/actionsTask'
import { TASK_ID } from '../../const/tasks'


const { TextArea } = Input;
const FORMAT = "DD.MM.YYYY hh:mm"

export const Tasks = () => {

  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')
  const { response } = useFetch('./tasks.json', null, 'tasks')

  const currentTask = useShallowEqualSelector(state => state.tasksState.currentTask)
    useEffect(() => {
      dispatch(setAllTasks(response))
      dispatch(setCurrentTask(TASK_ID))
    },[dispatch, response])
  const [taskExpert, setTaskExpert] = useState(currentTask.expert)

  const setTimePercent = (task) => {
      const currentDate = moment()
      const createdDate = moment(task.taskCreated, FORMAT)
      return (currentDate.diff(createdDate, 'hours') * 100) / task.taskTime
  }

  const changeComment = ({ target: { value } }) => {
    setInputValue(value)
  }

  const changeExpert = (value) => {
    setTaskExpert(value)
  }

  const saveComment = useCallback(() => {
    dispatch(setComment(inputValue))
    setInputValue('')
  }, [inputValue, dispatch])


  const saveExpert = useCallback(() => {
    if (!taskExpert) return
    dispatch(setExpert(taskExpert))
    dispatch(setComment(`Назначен исполнитель - ${taskExpert}`))
  },[taskExpert, dispatch])

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
          <Progress percent={setTimePercent(currentTask)}
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
      <StepTime timeSteps={getStepsTime(currentTask.taskTime)} currentStep={currentTask.currentStep} taskCreated={currentTask.taskCreated}/>
    <Row>
      <Col span={24}>
        <div className="select_block">
          <p className="label">
            Исполнитель {currentTask.expert ?  ': ' + currentTask.expert : ''}
          </p>
          <div className="wrapper">
            <div className="select">
              <CustomSelect  placeholder="Выберите исполнителя"
                              options={EXPERT}
                              size={"large"}
                              width="98%"
                              showSearch
                              onChange={changeExpert}
                              value={taskExpert}
                              disabled={!!currentTask.expert}
              />
            </div>
            <div className="buttons">
              <Button type="primary"
                      onClick={saveExpert}
                      disabled={!!currentTask.expert}
              >
                Завершить этап
              </Button>
            </div>
            </div>
          </div>
      </Col>
    </Row>
    <Row>
      <Col flex="1 1 200px">
        <section className="comment">
          <h2>Комментарии к задаче</h2>
            <Comment comment={currentTask && currentTask.comment} />
          <div className="comment_input">
            <PersonIcon/>
            <TextArea autoSize
                      onChange={changeComment}
                      value={inputValue}
            />
          </div>
          <div className="buttons">
            <Button type="secondary"
                    disabled={!inputValue}
                    onClick={saveComment}
                    >
              Добавить комментарий
            </Button>
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