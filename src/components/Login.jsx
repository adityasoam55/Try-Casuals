import Input from "./Input";
import React from "react";

function Login() {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                    <Input 
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    />

                    <Input
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    />

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-gray-400 px-3 py-1.5 text-sm/6 font-semibold text-black shadow-xs hover:bg-gray-300 focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Don't have Account?{' '}
                    <a href="#" className="font-semibold text-gray-900 hover:text-gray-700">
                        SignUp here
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Login;
