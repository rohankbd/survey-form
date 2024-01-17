import React from 'react';

const TextAreaInput = ({ name, value, placeholder, onChange }) => (
  <div className="mb-3">
    <textarea
      className="form-control"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
    />
  </div>
);

export default TextAreaInput;