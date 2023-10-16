import React from 'react';

const InputFieldv2 = ({type, register, errors, name, others}) => {
    return (
        <fieldset className='col-12 col-md-6 mb-2'>
            <label htmlFor={`${name}-input`} className='form-label'>
            {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
            <input
              type={type}
              id={`${name}-input`}
              className={`form-control ${errors[name] ? 'is-invalid' : ''}`}
              {...register(name,{
                required: 'Campo requerido.',
                ...others
              })}
            />
            <p className='text-danger'>{errors[name]?.message}</p>
          </fieldset>
    );
};

export default InputFieldv2;
