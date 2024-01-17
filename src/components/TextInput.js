import React from 'react';

const TextInput = ({ name, value, placeholder, onChange, type = 'text' }) => (
  <div className="mb-3">
    <input
      type={type}
      className="form-control"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
    />
  </div>
);

export default TextInput;