import React, { Component } from 'react'

export default class PreventDefault2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            name:"",
            age: "",
            nameErrorMsg:"",
            ageErrorMsg:"",

      }
    }

    changeHandler= (e)=>{
        if(e.target.name =="name"){
            if (e.target.value.length <5){
                this.setState({nameErrorMsg : "it should have 5 char"})
            }
        }else if(e.target.name =="age"){
            if(!Number(e.target.value)){
                this.setState({ageErrorMsg: "it should be number"})
            }
        }
       this.setState({[e.target.name]: e.target.value})
    }
    submitHandler=(e)=>{
        e.preventDefault();
        console.log(this.state);

    }
  render() {
    return (
      <div> 
          <form onSubmit={this.submitHandler}>
              <input name="name" onKeyUp={this.changeHandler}></input><br/><br/>
              {this.state.nameErrorMsg}
              <input name="age" onKeyUp={this.changeHandler}></input><br/><br/>
              {this.state.ageErrorMsg}
              <button type="submit">submit</button>
          </form>
      </div>
    )
  }
}
