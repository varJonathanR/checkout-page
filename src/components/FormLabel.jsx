import React, { useState, useEffect } from 'react'
import { useLocalStore } from './useLocalStore'
function Labels({ pText, inputType, inputHolder, inputLength, inIcon }) {

  const [text, setText] = useLocalStore(inputHolder, '')
  
  return (
    <div>
      <p>{pText}</p>
      <div className="field-group">
        <input 
          type={inputType} 
          className='field-group-input' 
          placeholder={inputHolder} 
          minLength={inputLength} 
          value={text} 
          onChange={(e) => setText(e.target.value)}
          required 
        />
        <div className="field-group-icon">
          <i className={inIcon} aria-hidden="true"></i>
        </div>
      </div>
    </div>
  )
}

function Checkbox () {
  return (
    <>
    <div className="checkbox-group">
      <label>
        <input type="checkbox" />
        <p>Save this information for next time</p>
      </label>
    </div>
    </>
  )
}

function Button () {
  return (
    <>
      <p className="alignRight">
        <button type='submit'>Continue</button>
      </p>
    </>
  )
}

export { Labels, Checkbox, Button }