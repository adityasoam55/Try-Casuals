import { Form, Formik, useFormik } from "formik";
import Input, { FormikInput } from "./Input";
import React from "react";
import * as Yup from 'yup';
import { Link, Navigate } from "react-router-dom";
import { signupUser } from "./api";

function Signup({ setUser, user }) {

    function callSignupAPI(values) {
        console.log("calling login API", values.fullname , values.email, values.password)
        signupUser(values).then((resp) => {
            const { user, token } = resp.data;
            localStorage.setItem('userToken', token);
            setUser(user);
            // console.log(user)
        })
    }

    const signupSchema = Yup.object().shape({
        fullname: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().min(8).max(12).required()
    })

    const initialValues = {
        fullname: "",
        email: "",
        password: ""
    }

    if (user) {
        return <Navigate to="/" />
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-8 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Sign-Up
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                <Formik
                    onSubmit={callSignupAPI}
                    validationSchema={signupSchema}
                    initialValues={initialValues}
                >
                    <Form className="space-y-6">
                        <FormikInput
                            id="fullname"
                            name="fullname"
                            label="Full Name"
                            type="string"
                        />
                        <FormikInput
                            id="email"
                            name="email"
                            label="Email address"
                            type="email"
                        />

                        <FormikInput
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                        />

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-gray-400 px-3 py-1.5 text-sm/6 font-semibold text-black shadow-xs hover:bg-gray-300 focus-visible:outline-2 "
                            >
                                Sign Up
                            </button>
                        </div>
                    </Form>
                </Formik>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Already have account - {''}
                    <Link to="/login/" className="font-semibold text-gray-900 hover:text-gray-700 hover:underline hover:underline-offset-4">
                        SignIn
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Signup;
