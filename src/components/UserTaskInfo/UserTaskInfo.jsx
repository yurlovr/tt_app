import React from 'react'
import { StepTime } from '../StepTime/StepTime'
import getStepsTime from '../../libs/getStepsTime'
import './UserTaskInfo.scss'

export const UserTaskInfo = ({task}) => {
  console.log(task)
  return (
    <>
      <h2 className="header_info">Связанные задачи</h2>
      <p className="task_info">
        {task.task}
      </p>
      <p className="description_info">
        {task.taskDescription}
      </p>
      <StepTime  currentStep={task.currentStep} timeSteps={getStepsTime(task.taskTime)} small/>
    </>
  )
}