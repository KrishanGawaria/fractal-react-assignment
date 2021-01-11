import React from 'react'

const Todo = (props) => {

  return (
    <div>
      <p onClick={props.deletePersonHandler}>Hi I am {props.person.name} of {props.person.age} years old.</p>
      <input type="text" value={props.person.name} onChange={props.nameChangeHandler}/>
    </div>
  )

}

export default Todo
