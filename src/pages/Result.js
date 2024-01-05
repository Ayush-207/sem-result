import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Result({ data }) {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     const getResult = async () => {
    //         const response = await fetch('http://localhost:3001/getResult?rollno=' + rolln, {
    //             mode: 'cors',
    //             method: 'GET'
    //         });
    //         const val = await response.json();
    //         setData(val);
    //     };
    //     getResult();
    // }, [rolln]);
    // console.log(data);
    const navigate = useNavigate();
    const body = [];
    if (data.length > 0 && data.length > 1) {

        for (let i = 0; i < (data[1].length - 7) / 4; i++) {
            body.push(<tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {data[1][i * 4 + 3].replace(/\s+/g, '')}
                </th>
                <td className="px-6 py-4">
                    {data[1][i * 4 + 4]}
                </td>
                <td className="px-6 py-4">
                    {data[1][i * 4 + 5]}
                </td>
                <td className="px-6 py-4">
                    {data[1][i * 4 + 6]}
                </td>
            </tr>);
        }
    }

    return (<div>

        {data.length > 1 && data[1].length > 2 ? (<div><div className="m-4 relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Roll Number
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            SGPA
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {data[1][1]}
                        </th>
                        <td className="px-6 py-4">
                            {data[1][2].split('\n')[0]}
                        </td>
                        <td className="px-6 py-4">
                            {data[1][data[1].length - 2]}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

            <div className="m-4 relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Sub Code
                            </th>
                            <th scope="col" className="px-6 py-3">
                                GR
                            </th>
                            <th scope="col" className="px-6 py-3">
                                GP
                            </th>
                            <th scope="col" className="px-6 py-3">
                                CRP
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {body}
                    </tbody>
                </table>
            </div></div>) : (<div>No such student exists! Try again.</div>)}

        <div className="flex justify-center">
            <button onClick={() => navigate('/')} type="button" className="mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Another result</button>
        </div>

    </div >);
}
