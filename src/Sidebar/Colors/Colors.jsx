import React from 'react'
import './Colors.css'
import Input from '../../components/Input'

const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test" />
        <span className="checkmark all"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test"
        color="green"
      />

      <label className="sidebar-label-container">

        <input type="radio" onChange={handleChange} value="white" name="test" />
        <span className="checkmark" style={{background: "white", border: "2px solid black",
          width: "16px", height: "16px"
        }}></span>
        White
      </label>
    </div>
  )
}

export default Colors