import React from 'react'

export default ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    if (comment.status === 'Pending') {
      comment.content = 'This comment is awaiting moderation'
    }
    if (comment.status === 'Rejected') {
      comment.content = 'This comment is rejected'
    }
    return <li key={comment.id}>{comment.content}</li>
  })

  return <ul>{renderedComments}</ul>
}
