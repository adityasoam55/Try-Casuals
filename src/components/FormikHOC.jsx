import { useField } from 'formik';
import React from 'react';

function FormikHOC(IncomingComponent) {
    function OutgoingComponent({ name, ...rest }) {
        const [data, meta] = useField(name);
        const { value, onBlur, onChange } = data;
        const { error, touched } = meta;

        return (
            <IncomingComponent
                name={name}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                error={error}
                touched={touched}
                {...rest}
            />
        )
    }

    return OutgoingComponent;
}

export default FormikHOC;
