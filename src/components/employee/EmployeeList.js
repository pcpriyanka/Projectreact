import React, { Component } from 'react'
import Action from './Action'
import Add from './Add'

export default class EmployeeList extends Component {
  state={
    employees:[
  {eid:1,salary:5000,ename:"Priyanka"},
  {eid:2,salary:6000,ename:"Nikita"},
  {eid:3,salary:7000,ename:"Harry"},
  {eid:4,salary:8000,ename:"Xyz"},

]

}
deleteList=(id) =>{
  const employees= this.state.employees.filter((t)=>{
      return t.eid !== id
  })
  this.setState({employees});
  }
  addTodo=(text, salary)=>{
      const newList={
          eid:new Date().getTime(),
          ename:text,
          salary:salary
      }
      const employees=[...this.state.employees]
      employees.push(newList)
      this.setState({employees})
      }
  render() {
    return (
      <div> {this.state.employees.map((item, index) =>
          <Action key={index} list={item} deleteList={this.deleteList}/> )}
      <Add addEmployee={this.addEmployee}/>

      )
      </div>
    )
  }
}
