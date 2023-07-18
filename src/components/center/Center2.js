import React, { Component } from "react";
import Addition from "../Addition";
import Addition2 from "../Addition2";
import Addition3 from "../Addition3";
import CallbackRef from "../CallbackRef";
import CallbackRef2 from "../CallbackRef2";
import Comments from "../comments/Comments";
import UserData1 from "../comments/UserData1";
import UsersData from "../comments/UsersData";
import Counter from "../Counter";
import EmployeeList from "../employee/EmployeeList";
import Greet from "../Greet";
import Greet1 from "../Greet1";
import Lifecycle from "../Lifecycle";
import Parent from "../parent/Parent";
import PasswordOrText1 from "../PasswordOrText1";
import PrevenDefault1 from "../PrevenDefault1";
import PrevenDefault from "../PrevenDefault1";
import PreventDefault2 from "../PreventDefault2";
import PreventDefault3 from "../PreventDefault3";
import Product1 from "../Product1";
import Refvar from "../Refvar";
import Refvar2 from "../Refvar2";
import Showhide from "../Showhide";
import TodoList from "../todo/TodoList";
import Useeffect from "../Useeffect";
import Center from "./Center.css";
import CrudApp from "../comments/CrudApp";
import { Route, Routes } from "react-router";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import NotFound from "../notFound/NotFound";
import Product from "../item/Product";
import ItemDetails from "../item/ItemDetails";


export default class extends Component {
  render() {
    // const f1= function() {
    //   alert("I'm invoked");
    // }

    // const add= function(a,b){
    //   alert(a+b);
    //}
    return (
      <div className="Center">
        {/* // <Greet1 name="Pikua" childadd={add} childf1={f1} />
        // <Greet name="Piku" msg="good morning"/>
        //  <h1>i'm proptypes dot children as i'm the text in between the class</h1>
       // <Greet msg="good evening"/>
        //   <Greet name="Harishankar"/>
         <Counter/>
          <Showhide/>  */}
        {/* {/* <PasswordOrText1 />
        <Addition />
        <Addition2 />  */}
         
        {/* <EmployeeList /> */}
        {/* <Addition3 /> */}
        {/* <Product1 /> */}
        {/* <Parent /> */}
        {/* <Lifecycle favCol="White" />
        <Useeffect /> */}
        {/* <Refvar /> */}
        {/* <CallbackRef /> */}
        {/* <CallbackRef2/> */}
        {/* <PreventDefault3 /> */}
        {/* <Comments /> */}
        {/* <UsersData /> */}
        {/* <UserData1 /> */}
        {/* <CrudApp /> */}
         

        <Routes>
		<Route exact path="/" element={<Home/>} />
    <Route exact path="/home" element={<Home/>} />
    <Route exact path="/product" element={<Product/>} />
    <Route path="/itemdetails/:id" element={<ItemDetails/>}/>
		<Route exact path="/about" element={<About/>} />
		<Route exact path="/contact" element={<Contact/>} />
		<Route exact path="*" element={<NotFound/>} />
	</Routes>
      </div>
    );
  }
}
