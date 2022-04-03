import React, { useEffect, useState } from 'react'
import './App.css';


function App() {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState(null)
  const [email, setEmail] = useState('')
  const [list, setList] = useState([])
  const [s, setS] = useState(false)
  const handleAdd = () => {
    const listDetails = {
      name: name, mobile: mobile, email: email,
      id: Math.floor(Math.random() * 1000)
    }
    setList([...list, listDetails])

  }


  const handleDelete = (id) => {
    const filterList = list.filter((value) => value.id != id)
    setList([...filterList])
  }
  console.log(list)
  return (
    <div className="container">
      <div className="App">
        <div className="header">
          <h4>Employee List</h4>
        </div>
        <div className="myform">

          <label >Name*</label>
          <input type="text" className="input" onChange={(e) => setName(e.target.value)} />
          <label  >Mobile Number*</label>
          <input type="number" id="lname" className="input" onChange={(e) => setMobile(e.target.value)} />
          <label >Email*</label>
          <input type="email" id="lname" className="input" onChange={(e) => setEmail(e.target.value)} />
          <button className="add" onClick={handleAdd}>Add</button>
        </div>
      </div>
      <div className="list-container">
        {list.map((value, index) => {
          return <div className="list-card" key={index}>
            <div> <span className="name">Name: </span><span className='mobile'>Mobile No.</span></div>
            <div><span className="value">{value.name}</span><span className="mobileValue">{value.mobile}</span></div>
            <div className="email-id">Email ID</div>
            <div className="second">
              <div className="email-value">{value.email}</div>
              <button className="delete " onClick={() => handleDelete(value.id)}>Delete</button>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
