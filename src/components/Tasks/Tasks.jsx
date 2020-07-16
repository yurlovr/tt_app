import React, {useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
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
import useFetch from '../../hooks/useFetch'
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector'
import { TASK_ID } from '../../const/tasks'


const { TextArea } = Input;
const FORMAT = "DD.MM.YYYY hh:mm"

export const Tasks = () => {

  const [inputValue, setInputValue] = useState('')
  const currentTask = useShallowEqualSelector(state => state.tasksState.currentTask)
  const [taskExpert, setTaskExpert] = useState(currentTask.expert)
  const dispatch = useDispatch();
  const { response } = useFetch('./tasks.json', null)

    /*
    В реальном проекте, на странице всех задач - получаем массив объектов задач с id задачи и необходимым описанием
    далее нажимаем на карточку задачи,делаем запрос по конкретному id, получаем конкретную задачу
    и отображаем ее в компоненте
    Тут id задачи захардкорен, его можно получить например из useLocation
    При каждом монтировании компонента идет запрос всех задач, но условие ниже не обновляет стор,
    так как тогда будyт теряться комменарии...
    В реальном проекте, при добавлении коментария, данные задачи должны отправлятся на сервер, затем,
    при повторном монтировании этого компонента, задача должна прилететь с сохраненным коментарием.
  */

  if (!Object.keys(currentTask).length) {
    dispatch(setAllTasks(response))
    dispatch(setCurrentTask(TASK_ID))
  }

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
    dispatch(setExpert(taskExpert))
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
      <StepTime timeSteps={getStepsTime(currentTask.taskTime)} currentStep={currentTask.currentStep} />
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
              />
            </div>
            <div className="buttons">
              <Button type="primary"
                      onClick={saveExpert}
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