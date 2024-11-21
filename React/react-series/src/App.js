// multiple to one state example 
import React, { useState } from 'react'

function ConsolidateStateExample() {
  // using a single state object to manage multiple pieces of state 
  const [formState, setFormState] = useState({
    // stores the name input and age input
    name: "", 
    age: "",
  });

  // handler function to update the state dynamically base in input changes 
  const handleChange = (e) => {
    const { name, value } = e.target; // destructure the input's name and value 
    //update the specific property in formState
    setFormState((prevState) => ({
      ...prevState, // retain all existing properties in the state
      [name]: value, // update the property that mathces thge input's name 
    }))
  };

  // function to handle the sumbmission 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted Data: ", formState);
  };

  return (
    <div>
      <h1>Consolidate Multiple States Example</h1>
      <form onSubmit={handleSubmit}>
        {/* Input for Name */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name" // Corresponds to the "name" property in formState
            value={formState.name} // Controlled input, synced with formState
            onChange={handleChange} // Update state when the input changes
          />
        </div>
        {/* Input for Age */}
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age" // Corresponds to the "age" property in formState
            value={formState.age} // Controlled input, synced with formState
            onChange={handleChange} // Update state when the input changes
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* Display the current state in a readable JSON format */}
      <h2>Current State:</h2>
      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </div>
  );
}

export default ConsolidateStateExample;