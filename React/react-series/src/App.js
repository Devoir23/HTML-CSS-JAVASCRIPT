// Learning about Multiple State
import React, { useState } from 'react'

function UserProfile() {
  // declare multiple state variables
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  // handler to reset 
  const resetProfile = () => {
    setName("");
    setAge(0);
  };

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <label>Name: </label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter Your Name'
        />
      </div>
      <div>
      <label>Age: </label>
        <input 
          type="number" 
          value={age} 
          onChange={(e) => setAge(Number(e.target.value))} 
          placeholder="Enter your age" 
        />
      </div>
      <p>
        <strong>Name:</strong> {name} <br />
        <strong>Age:</strong> {age} <br />
      </p>
      <button onClick={resetProfile}>Reset Profile</button>
    </div>
  );
}


export default UserProfile;