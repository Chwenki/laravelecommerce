import { Link } from '@inertiajs/react';
import { CornerUpLeft } from 'lucide-react';
import { useState } from 'react';

export default function Breadcrumb(props) {
    const [prevUrl, setPrevUrl] = useState('');

    console.log(props['bcvalues'][0]);
    // let bcvaluestext = [];
    // let bcvaluesurl = [];
    // for (let i = 3; i < props['bcvalues'].length; i++) {
    //     bcvaluesurl.push('/' + props['bcvalues'][i]);
    //     bcvaluestext.push(props['bcvalues'][i].replace(props['bcvalues'][i][0], props['bcvalues'][i][0].toUpperCase()));
    // }
    // for (let j = 1; j < bcvaluesurl.length; j++) {
    //     for (let m = 0; m <= j - 1; m++) {
    //         bcvaluesurl[j] = bcvaluesurl[m] + bcvaluesurl[m + 1];
    //     }
    // }
    function Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <>
            <ul className="mb-5 flex flex-row gap-1">
                <li className="mr-3">
                    <button className="flex cursor-pointer flex-row" onClick={() => window.history.back()}>
                        <CornerUpLeft color="black" size={20} />
                        Back
                    </button>
                </li>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>/</li>
                <li>
                    <Link href={`/${props['bcvalues'][3]}`}>{Capitalize(props['bcvalues'][3])}</Link>
                </li>
                <li>/</li>
                <li>
                    <p>{Capitalize(props['bcvalues'][4])}</p>
                </li>
            </ul>
        </>
    );
}
