import React from 'react'
import './UserTaskInfo.scss'

export const UserTaskInfo = ({task, stepTime}) => {
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
    </>
  )
}