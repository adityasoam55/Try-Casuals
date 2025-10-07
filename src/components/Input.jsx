import React, { useState } from "react";

function Input({
  id,
  name,
  label,
  type = "text",
  error,
  touched,
  className = "",
  icon: Icon,
  showToggle = false,
  ...rest
}) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-900 mb-1"
        >
          {label}
        </label>
      )}

      {/* Input Wrapper */}
      <div className="relative">
        {/* Optional Left Icon */}
        {Icon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Icon size={18} />
          </span>
        )}

        {/* Input Field */}
        <input
          id={id}
          name={name}
          type={inputType}
          {...rest}
          className={`block w-full border rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 
          focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent
          ${Icon ? "pl-10" : ""}
          ${error && touched ? "border-red-500" : "border-gray-300"}
          ${className}`}
        />

        {/* Password Toggle */}
        {type === "password" && showToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        )}
      </div>

      {/* Error Message */}
      {error && touched && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export default Input;
