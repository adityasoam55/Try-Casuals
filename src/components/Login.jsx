import { Form, Formik, useFormik } from "formik";
import { FormikInput } from "./Input";
import React from "react";
import * as Yup from 'yup';
import { Link, Navigate } from "react-router-dom";
import { loginUser } from "./api";

function Login({ setUser, user }) {

    function callLoginAPI(values) {
        loginUser(values).then((resp) => {
            const { user, token } = resp.data;
            localStorage.setItem('userToken', token);
            setUser(user);
            // console.log(user)
        })
    }

    const loginSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(8).max(12).required()
    })

    const initialValues = {
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
                    Sign in to your account <br />
                    <span className="text-sm">OR</span> <br />
                    <span className="text-sm font-normal">{`Use these credentials to login {email: one@one.com, password: 12345678}`}</span>
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                <Formik
                    onSubmit={callLoginAPI}
                    validationSchema={loginSchema}
                    initialValues={initialValues}
                >
                    <Form className="space-y-6">
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
                                Sign in
                            </button>
                        </div>
                    </Form>
                </Formik>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Don't have Account?{' '}
                    <Link to="/signup/" className="font-semibold text-gray-900 hover:text-gray-700 hover:underline hover:underline-offset-4">
                        SignUp here
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login;
