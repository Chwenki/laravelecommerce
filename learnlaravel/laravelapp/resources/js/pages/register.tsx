import { Form } from '@inertiajs/react';

export default function Register() {
    return (
        <>
            <div className="flex h-screen items-center justify-center bg-gray-50">
                <div className="w-100 rounded-md bg-gray-200 p-5">
                    <Form className="flex flex-col gap-4" method="post" action={route('registerpost')}>
                        <h1 className="text-2xl">Register Your Account</h1>
                        <div className="form-group">
                            <input placeholder="Username" className="w-full rounded-md bg-white p-3" type="text" id="username" name="name" required />
                        </div>
                        <div className="form-group">
                            <input placeholder="Email" className="w-full rounded-md bg-white p-3" type="email" id="email" name="email" required />
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
                        <button className="cursor-pointer rounded-2xl bg-blue-700 p-4" type="submit">
                            Register
                        </button>
                    </Form>
                </div>
            </div>
        </>
    );
}
