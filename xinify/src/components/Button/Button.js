/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
/*
  handleSubmit: function to trigger on button click (func)
  buttonText: button label (string)
  buttonClass: class name for button (string)
  buttonType: type of button. [Eg.: submit, button] (string)
  disabled: boolean for button disability (bool)
*/

export const Button = (props) => {
  const {
    handleSubmit,
    buttonText,
    buttonClass,
    buttonType,
    disabled,
  } = props;

  return (
    <>
      {(buttonType === 'submit') ? (
        <button disabled={disabled} type="submit" className={`btn btn-primary ${buttonClass} ${disabled ? 'disabled' : ''}`} onClick={(e) => { handleSubmit(e); }}>{buttonText}</button>
      ) : (
          <button disabled={disabled} type="button" className={`btn btn-primary ${buttonClass} ${disabled ? 'disabled' : ''}`} onClick={(e) => { handleSubmit(e); }}>{buttonText}</button>
        )}
    </>
  );
};

Button.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonClass: PropTypes.string,
  buttonType: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  buttonClass: '',
  buttonType: 'button',
  disabled: false,
};

export default Button;
