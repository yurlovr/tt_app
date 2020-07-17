import React from 'react'
import { Row, Col } from 'antd'
import { TimerIcon } from '../icons/TimerIcon'
import getTaskTime  from '../../libs/getTaskTime'
import './StepTime.scss'

const classNames = require('classnames');

function StepTimeFunc ({currentStep, timeSteps, taskCreated, small}) {
  const getCurrentStepTime = (steps, currentStep) => {
    switch (currentStep) {
      case 1: return steps.oneStep
      case 2: return steps.twoStep
      case 3: return steps.threeStep
      default: return null
    }
  }
  return (
    <Row className="row_step">
      <Col span={24}>
        <div className={classNames(small ? "timer-sm" : "timer")}>
          <span>
            <TimerIcon small/>
          </span>
          <span>Время на этап: {getTaskTime(getCurrentStepTime(timeSteps, currentStep), taskCreated)}</span>
        </div>
      </Col>
    </Row>
  )
}

export const StepTime = React.memo(StepTimeFunc)