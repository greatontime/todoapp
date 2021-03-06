import React, { PropTypes } from 'react'

const TodoItem = ({text, complete, toggleStatus}) => (
  <li onClick={ () => { toggleStatus(text) } } className={complete?'complete':''}>{text}</li>
)

TodoItem.propTypes = {
  complete: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}
export default TodoItem