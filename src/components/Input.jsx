import { useField } from 'formik';
import React from 'react';

function Input({ id, name, label, ...rest }) {

    const [ data, meta] = useField(name);
    const { value, onBlur, onChange } = data;
    const { error, touched } = meta;

    return (
        <div>
            <div className="flex items-center justify-between">
                <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
                    {label}
                </label>
            </div>
            <div className="mt-2">
                <input
                    id={id}
                    name={name}
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    {...rest}
                    autoComplete="current-password"
                    className="block  border w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-gray-600 sm:text-sm/6"
                />
            </div>
            {error && touched && <div className="text-red-600">{error}</div>}
        </div>
    )
}

export default Input;
