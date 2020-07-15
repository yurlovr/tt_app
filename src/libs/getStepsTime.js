export default function getStepsTime (taskTime) {
  const oneStep = Math.floor(taskTime / 3)
  const twoStep = Math.floor(taskTime / 3)
  const threeStep = taskTime - oneStep - twoStep
  return {
    oneStep,
    twoStep,
    threeStep
  }
}