import React from 'react'
import Todo from './todo/Todo'

const Todos = (props) => {

  let persons = props.persons.map((person,index)=>{
    return (
      <Todo
        person={person}
        key={index}
        deletePersonHandler={()=>{props.deletePersonHandler(index)}}
        nameChangeHandler={(e)=>{props.nameChangeHandler(e,index)}} 
      />
    )
  })

  return (
    <div>
      {persons}
    </div>
  )

}

export default Todos
