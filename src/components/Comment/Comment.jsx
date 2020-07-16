import React from 'react'
import { NoComment } from './NoComment'
import './Comment.scss'

export const Comment = ({comment}) => {
  console.log("dcdcdcd", comment)
  const getComment = () => {
    return comment.map(c => {
      return (
        <NoComment  comment={c}  key={c.id}/>
      )
    })
  }
  if (comment && !comment.length) {
    return (
    <NoComment />
    )
  }
  if (comment && comment.length) {
    return (
      <>
      {getComment()}
      </>
    )
  }
  return null
}