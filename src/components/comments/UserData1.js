import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import Swal from "sweetalert2";

// import {Button, Form , Table} from 'semantic-ui-react';

export default function UserData1() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  const [first_name, setfirstName] = useState("");
  const [email, setEmail] = useState("");
  const [last_name, setLastName] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  

  // console.log(first_name);
  // console.log(last_name);

  const changeHandler = function (e) {
    setfirstName(e.target.value);
    setLastName(e.target.value);
    setEmail(e.target.value);
  };

  const submitHandler = function (e) {
    e.preventDefault();
    let output = {};
    output = {
      first_name: first_name,
      last_name: last_name,
      email: email,
    };
    if (isEdit) {
      updateUser(output, id);
    } else {
      addUser(output);
    }
  };

  const fetchUser = function () {
    const myURL = "http://localhost:4000/users";
    axios
      .get(myURL)
      .then((res) => {
        setUsers([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addUser = function (data) {
    const myURL = "http://localhost:4000/users";
    axios.post(myURL, data).then((response) => {
      Swal.fire("user got added", "", "success");
      closeModal();
      fetchUser();
    });
  }

  const updateUser = function (data, id) {
    axios
      .put(`http://localhost:4000/users/${id}`, data)
      .then((response) => {
        Swal.fire("user got updated", "", "success");
        closeModal();
        fetchUser();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteUser = function (id) {
    axios.delete(`http://localhost:4000/users/${id}`).then((result) => {
      fetchUser();
    });
  };

  // const useEffect = function () {
  //   fetchUser();
  // };

  const openModal = function () {
    setModalIsOpen({ modalIsOpen: true, isEdit: false });
  };

  // const openEditModal = function () {
  //  setUsers[id:id;
  //   first_name:first_name;
  //   email: email;
  //   last_name: last_name;
  //   isEdit: true;
  //   modalIsOpen: true;]
  // };

  const closeModal = function () {
    setModalIsOpen({ modalIsOpen: false });
  };

  return (
    <>
      <h2>Users</h2>
      <div className="btn btn-success" onClick={openModal}>
        <div>Add New user</div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID </th>
            <th>first_name</th>
            <th>last_name</th>
            <th>email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, ind) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  {/* <button className="edit"
                  onClick={() =>
                    openEditModal(
                      user.id,
                      user.first_name,
                      user.last_name,
                      user.email
                    )
                  }>edit</button> */}
                
                <button className="delete" onClick={() => deleteUser(user.id)}>delete</button>
                </td>
                
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* </><button onClick={()=>setModalIsOpen(true)}>open Modal</button>   */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button onClick={closeModal}>close</button>
        <form onSubmit={submitHandler}>
          <div>
            <h4>Add user</h4>
          </div>
          <div>
            <label>ID</label>
            <input
              type="number"
              name="id"
              onChange={changeHandler}
              value={id}
            />
          </div>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="first_name"
              onChange={changeHandler}
              value={first_name}
              required
            />
          </div>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="last_name"
              onChange={changeHandler}
              value={last_name}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={changeHandler}
              value={email}
              required
            />
          </div>
          <div>
            <input
              type="button"
              onClick={closeModal}
              data-dismiss="modal"
              value="Cancel"
            />
            <input type="submit" value="Save" />
          </div>
        </form>
      </Modal>
    </>
  );
}

// const sendData = function(){
//   axios
//   .post(`http://localhost:4000/employees`, {first_name, last_name})
// }

//   const getData = function () {
//     axios
//   .get(`http://localhost:4000/employees`)
//       .then((res) => {
//         setUsers([...res.data]);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// return <div>
//   <table>
//        <input name="fname" onChange={(e)=>setfirstName(e.target.value)} placeholder="firstname"></input>
//       <input name="lname" onChange={(e)=>setLastName(e.target.value)} placeholder="Lasttname"></input>
//       <button type="submit" onClick={sendData}>add data</button>
//       <button onClick={getData}>get data</button>

//       <table className="table">
//         {users.map((user) => (
//           <tr key={user.id}>
//             <td>{user.id}</td>
//             <td>{user.first_name}</td>
//             <td>{user.last_name}</td>
//             <td>{user.email}</td>
//             <td>update</td>
//             <td>delete</td>
//           </tr>

//         ))}
//       </table>
//      </table>

//semantic

{
  /* <Form class="ui form">
  <div class="field">
    <label>First Name</label>
    <input type="text" onChange={(e)=>setfirstName(e.target.value)} name="first_name" placeholder="First Name"></input>
  </div>
  <div class="field">
    <label>Last Name</label>
    <input type="text" onChange={(e)=>setLastName(e.target.value)} name="last_name" placeholder="Last Name"></input>
  </div>
  <Button class="ui button" type="submit" onClick={sendData}>add data</Button>
</Form> */
}

{
  /* <table class="ui celled table">
  <thead>
    <tr><th>id</th>
    <th>first_name</th>
    <th>last_name</th>
    <th>email</th>
  </tr></thead>
  <tbody className="table">
  {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td> 
              <td>
                <Button color="green">update</Button></td> 
              <td>
              <Button color="red">Delete</Button></td> 
            </tr>

          ))}
  </tbody> */
}
{
  /* </table> */
}

// </div>;
