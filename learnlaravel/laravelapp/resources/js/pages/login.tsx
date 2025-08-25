import { Form } from '@inertiajs/react';

export default function Login(props) {
    console.log(props);

    return (
        <>
            <div className="flex h-screen items-center justify-center bg-gray-50">
                <div className="w-100 rounded-md bg-gray-200 p-5">
                    <Form method="post" action={route('loginp')} className="flex flex-col gap-6">
                        {({ errors }) => (
                            <>
                                {console.log(errors)}
                                <h1 className="text-2xl">Log in</h1>
                                <p>
                                    or <a href={route('registerget')} className='text-blue-400 hover:text-blue-800'>create an Account!</a>
                                </p>
                                <div className="form-group">
                                    <input
                                        placeholder="Email"
                                        className="w-full rounded-md bg-white p-3"
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        placeholder="Password"
                                        className="w-full rounded-md bg-white p-3"
                                        type="password"
                                        id="password"
                                        name="password"
                                        required
                                    />
                                </div>
                                <span>
                                    <a href="#" className="text-blue-400 hover:text-blue-800">
                                        Forgot password?
                                    </a>
                                </span>
                                {errors.email && <p className="text-red-600">{errors.email}</p>}
                                <button className="cursor-pointer rounded-2xl bg-blue-700 p-4" type="submit">
                                    Login
                                </button>
                            </>
                        )}
                    </Form>
                </div>
            </div>
        </>
    );
}
