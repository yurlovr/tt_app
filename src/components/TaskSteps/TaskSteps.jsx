import React from 'react'
import 'antd/dist/antd.css'
import { Steps } from 'antd'
import { STEPS } from '../../const/steps'
import { FinishIcon } from '../icons/FinishIcon'

const { Step } = Steps

export const TaskSteps = ({currentStep}) => {

  const renderStep = () => {
    return STEPS.map((step, index) => {
      return (
        <Step description={step.title}
              key={step.id}
              id={step.id}
              icon={ index === STEPS.length - 1 ? <FinishIcon/>  : null}/>
      )
    })
  }

  return (
    <>
      <h2>Этапы выполнения</h2>
      <Steps direction="vertical" current={currentStep - 1} size="small">
        {renderStep()}
      </Steps>
    </>
  )
}