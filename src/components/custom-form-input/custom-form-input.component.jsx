import React from 'react'

import './custom-form-input.styles.scss'

export default function CustomFormInput({handleChange, label, ...otherInputProps}) {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherInputProps} />
      {
        label 
        ? (<label className={`${otherInputProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>)
        : null
      }
    </div>
  )
}
