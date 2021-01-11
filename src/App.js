import React, {Component} from 'react';
import './App.css';

// import Todos from './todos/Todos'
import Buckets from './buckets/Buckets';


class App extends Component{

  state = {
    buckets : [
      {id: 1, name: 'B1', isEdit: false, todos: [
        {id: 1, name: 'Read News', isEdit: false},
        {id: 2, name: 'Write Paper', isEdit: false}
      ]},

      {id: 2, name: 'B3', isEdit: false, todos: [
        {id: 1, name: 'Practice Maths', isEdit: false},
        {id: 2, name: 'Go to classes', isEdit: false}
      ]},
    ],
    newBucket: ''
  }

  addBucket = () => {
    let buckets = [...this.state.buckets]
    let maxId = 0;
    buckets.forEach(e => {
      if (e.id > 0) { maxId = e.id };
    })
    buckets.push({id: maxId, name: this.state.newBucket, isEdit: false, todos: []});
    this.setState({buckets:buckets})
  }

  addBucketChangeHandler = (e) => {
    console.log(e.target.value)
    this.state.newBucket = e.target.value;    
  }

  bucketChangeHandler = (e,index) => {
    console.log(e.keyCode)
    // console.log(e.target.value)
    let buckets = [...this.state.buckets]
    buckets[index].name = e.target.value
    this.setState({buckets:buckets})
  }

  bucketEditClickListener = (index) => {
    console.log(index);
    let buckets = [...this.state.buckets]
    buckets[index].isEdit = true;
    this.setState({buckets:buckets})
  }

  bucketUpdateClickListener = (index) => {
    console.log(index);
    let buckets = [...this.state.buckets]
    buckets[index].isEdit = false;
    this.setState({buckets:buckets})
  }

  bucketDeleteClickListener = (index) => {
    console.log(index);
    let buckets = [...this.state.buckets]
    buckets.splice(index, 1);
    this.setState({buckets:buckets})
  }

  todoChangeHandler = (e,bucketIndex, todoIndex) => {
    let buckets = [...this.state.buckets]
    buckets[bucketIndex].todos[todoIndex].name = e.target.value
    this.setState({buckets:buckets})
  }

  todoEditClickListener = (bucketIndex, todoIndex) => {
    let buckets = [...this.state.buckets]
    buckets[bucketIndex].todos[todoIndex].isEdit = true;
    this.setState({buckets:buckets})
  }

  todoUpdateClickListener = (bucketIndex, todoIndex) => {
    let buckets = [...this.state.buckets]
    buckets[bucketIndex].todos[todoIndex].isEdit = false;
    this.setState({buckets:buckets})
  }

  todoDeleteClickListener = (bucketIndex, todoIndex) => {
    let buckets = [...this.state.buckets]
    buckets[bucketIndex].todos.splice(todoIndex, 1);
    this.setState({buckets:buckets})
  }

  render(){

    // return(
    //   <div>
    //     <h2 className="App">Krishan - Todo app</h2>
    //     <Todos
    //       persons={this.state.persons}
    //       deletePersonHandler={this.deletePersonHandler}
    //       nameChangeHandler={this.nameChangeHandler}
    //     />
    //   </div>
    // )

    return (
      <div>
        <h3>krishan.garg12@gmail.com</h3>
        <input onChange={(e) => {this.addBucketChangeHandler(e)}} placeholder="Type bucket name"/>
        <button onClick={this.addBucket}>Add Bucket</button>
        <p></p>
        <Buckets 
          buckets = {this.state.buckets}
          bucketChangeHandler = {this.bucketChangeHandler}
          bucketEditClickListener = {this.bucketEditClickListener}
          bucketUpdateClickListener = {this.bucketUpdateClickListener}
          bucketDeleteClickListener = {this.bucketDeleteClickListener}
          todoChangeHandler = {this.todoChangeHandler}
          todoEditClickListener = {this.todoEditClickListener}
          todoUpdateClickListener = {this.todoUpdateClickListener}
          todoDeleteClickListener = {this.todoDeleteClickListener}
        />
      </div>
      
    )

  }

}

export default App;
