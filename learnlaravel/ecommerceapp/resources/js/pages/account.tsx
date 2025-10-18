import { destroy } from '@/actions/App/Http/Controllers/AccountController';
import { Button } from '@/components/ui/button';
import { Form } from '@inertiajs/react';
import Footer from './footer';
import Nav from './nav';

export default function Account(props) {
    const currentURL = window.location.href;
    console.log(props);

    return (
        <>
            <Nav prodNum={props['prodNum']} />
            <div className="mx-12 my-20 mt-45 grid grid-cols-5 gap-8">
                <div className="flex w-full flex-col gap-3">
                    <Form
                        {...destroy.form()}
                        resetOnSuccess={['password']}
                        className="relative top-0 flex max-w-md flex-col gap-6 overflow-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Button type="submit">Logout</Button>
                    </Form>
                </div>
            </div>
            <Footer />
        </>
    );
}
