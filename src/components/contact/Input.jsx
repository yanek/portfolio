import PropTypes from 'prop-types';
import { useId } from 'react';

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'textarea', 'password']),
};

function Input({ name, label, placeholder, type = 'text' }) {
  const id = useId();
  const input =
    type === 'textarea' ? (
      <textarea id={id} name={name} placeholder={placeholder} required />
    ) : (
      <input type={type} id={id} name={name} placeholder={placeholder} required />
    );

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {input}
    </div>
  );
}

export default Input;
