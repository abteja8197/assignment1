import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Select.scss';
import { Multiselect } from 'multiselect-react-dropdown';

/*
  props:
  options: dropdown options (string)
  placeholder: placeholder (string)
  selectedValues: selected values (string)
  className: class for select (string)
  isObject: boolean for options are objects (bool)
  value: key to display the options if options are objects (string)
  multiple: boolean for multi select component (bool)
*/
const Select = (props) => {
  const {
    options,
    placeholder,
    selectedValues,
    className,
    isObject,
    value,
    multiple,
  } = props;

  const [myList, setMyList] = React.useState(selectedValues);
  useEffect(() => {
    setMyList(selectedValues);
  }, [selectedValues]);

  const onSelect = (selectedList, selectedValue) => {
    props.onSelect(selectedList, selectedValue);
    setMyList(selectedList);
  };
  const onRemove = (selectedList, removedValue) => {
    props.onRemove(selectedList, removedValue);
    setMyList(selectedList);
  };
  React.useEffect(() => {
    setMyList(selectedValues);
  }, [selectedValues]);

  return (
    <div className={multiple ? 'form-group form-multiselect' : 'form-group form-select'}>
      {(isObject === true)
        ? (
          <>
            <Multiselect
              closeIcon="cancel"
              options={(typeof options === 'string') ? JSON.parse(options) : options}
              onSelect={onSelect}
              onRemove={onRemove}
              singleSelect={!multiple}
              displayValue={value}
              placeholder={placeholder}
              selectedValues={(typeof myList === 'string') ? JSON.parse(myList) : myList}
              className={className}
            />
            <span className={multiple ? 'form-multiselect--icon' : ''} />
          </>
        )
        : (
          <>
            <Multiselect
              closeIcon="cancel"
              options={(typeof options === 'string') ? JSON.parse(options) : options}
              isObject={false}
              singleSelect={!multiple}
              onSelect={onSelect}
              onRemove={onRemove}
              placeholder={placeholder}
              selectedValues={(typeof myList === 'string') ? JSON.parse(myList) : myList}
              className={className}
            />
            <span className={multiple ? 'form-multiselect--icon' : ''} />
          </>
        )}
    </div>
  );
};

// Props validation
Select.propTypes = {
  options: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  selectedValues: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  className: PropTypes.string,
  isObject: PropTypes.bool,
  value: PropTypes.string,
  multiple: PropTypes.bool,
};

// Default props
Select.defaultProps = {
  placeholder: 'Select',
  selectedValues: [],
  className: '',
  isObject: false,
  value: 'key',
  multiple: false,
};
export default Select;
