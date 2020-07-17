import React from 'react'
import { StepTime } from '../StepTime/StepTime'
import getStepsTime from '../../libs/getStepsTime'
import './UserTaskInfo.scss'

export const UserTaskInfo = ({tasks}) => {
  if (!tasks) return null

  const mapTasks = () => {
    return tasks.map(t => {
      return (
        <li key={t.taskId}>
          <p className="task_info">
            {t.task}
          </p>
          <p className="description_info">
            {t.taskDescription}
          </p>
          <StepTime  currentStep={t.currentStep} timeSteps={getStepsTime(t.taskTime)} taskCreated={t.taskCreated} small/>
        </li>
      )
    })
  }
  return (
    <div>
      <h2 className="header_info">Связанные задачи</h2>
      <ul>
        {mapTasks()}
      </ul>
    </div>
  )
}