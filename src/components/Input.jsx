import React from 'react';
import FormikHOC from './FormikHOC';

function Input({ id, name, label, error, touched, classname , ...rest }) {

    return (
        <div>
            <div className="flex items-center justify-between">
                <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
                    {label}
                </label>
            </div>
            <div>
                <input
                    id={id}
                    name={name}
                    {...rest}
                    autoComplete="current-password"
                    className={`block  border w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-gray-600 sm:text-sm/6 ${classname}` }
                />
            </div>
            {error && touched && <div className="text-red-600">{error}</div>}
        </div>
    )
}

export const FormikInput = FormikHOC(Input);

export default Input;
