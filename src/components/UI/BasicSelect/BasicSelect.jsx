import React from 'react';

import classes from './BasicSelect.module.css';

const BasicSelect = ({options, defaultValue, value, onChange}) => {

  return (
    <select
      value={value}
      className={classes.basicSelect}
      onChange={event => onChange(event.target.value)}
    >
      <option disabled value="">{defaultValue}</option>
      {options.map(option =>
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      )}
    </select>
  );
};

export default BasicSelect;
