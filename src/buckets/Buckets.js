import React from 'react'

const Buckets = (props) => {

  let buckets = props.buckets.map((bucket,index)=>{
    
    let todos = bucket.todos.map((todo, todoIndex) => {
        if (todo.isEdit) {
            return (
                <div key={todoIndex + 'i'}>
                    <input type="text" value={todo.name} onChange={(e) => { props.todoChangeHandler(e, index, todoIndex) }}/>
                    <button onClick={() => {props.todoUpdateClickListener(index, todoIndex)}}>Update Todo</button>
                </div>
            )
        } else {
            return (
                <div key={todoIndex + 'i'}>
                    <label>{todo.name}</label>
                    <button onClick={() => {props.todoEditClickListener(index, todoIndex)}}>Edit Todo</button>
                    <button onClick={() => {props.todoDeleteClickListener(index, todoIndex)}}>Delete Todo</button>
                </div>
            )
            
        }
    })

    if (bucket.isEdit) {
        return (
            <div key={index}>
                <hr></hr>
                <input type="text" value={bucket.name} onChange={(e) => { props.bucketChangeHandler(e, index) }}/>
                <button onClick={() => {props.bucketUpdateClickListener(index)}}>Update Bucket</button>
            </div>
        )
    } else {
        return (
            <div key={index}>
                <hr></hr>
                <b>Bucket</b> - <label>{bucket.name}</label>
                <button onClick={() => {props.bucketEditClickListener(index)}}>Edit Bucket</button>
                <button onClick={() => {props.bucketDeleteClickListener(index)}}>Delete Bucket</button>
                <p>Todos</p>
                {todos}
            </div>
        )
        
    }

  })

//   return (
//     <div>
//       {persons}
//     </div>
//   )

    return (
        <div>
            {buckets}
        </div>
    )



}

export default Buckets
