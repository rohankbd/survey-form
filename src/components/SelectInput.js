import React from 'react';

const SelectInput = ({ name, value, onChange, options }) => (
  <div className="mb-3">
    <select className="form-select" name={name} value={value} onChange={onChange} required>
      <option value="">{options.default}</option>
      {options.values.map((optionValue) => (
        <option key={optionValue} value={optionValue}>
          {optionValue}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInput;