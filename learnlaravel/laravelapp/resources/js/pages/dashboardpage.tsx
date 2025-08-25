import { Form } from '@inertiajs/react';
export default function dashboardPage(props) {
    console.log(props);
    return (
        <>
            <div className="flex h-screen items-center justify-center bg-gray-50">
                <div className="w-100 rounded-md bg-gray-200 p-5">
                    <Form method="post" action={route('dashboardp')} className="flex flex-col gap-6">
                        <p>Welcome {props.user.name}</p>
                        <button className="rounded-2xl bg-blue-700 p-4" type="submit">
                            Logout
                        </button>
                    </Form>
                </div>
            </div>
        </>
    );
}
