import React from 'react';
// import './Input.css'; // Opcional, para estilização

const Input = ({ label, type = "text", value, onChange, placeholder }) => {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
