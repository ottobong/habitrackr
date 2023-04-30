import React from 'react';
import './formInput.scss';

const FormInput = (props) => {
  return (
    <div className='formInput'>
      <input placeholder={props.placeholder}/>
    </div>
  )
}

export default FormInput
