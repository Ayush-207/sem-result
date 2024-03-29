import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Result({ data }) {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     const getResult = async () => {
    //         const response = await fetch('https://sem-result-server.onrender.com/getResult?rollno=' + rolln, {
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
    let store = [];
    if (data.length > 0 && data.length > 1) {
        console.log(data);
        data[1].map((resultVal) => {
            const body = [];
            for (let i = 0; i < (resultVal.length - 7) / 4; i++) {
                body.push(<tr key={body.length + 1} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {resultVal[i * 4 + 3].split(' ')[0]}
                    </th>
                    <td className="px-6 py-4">
                        {resultVal[i * 4 + 4]}
                    </td>
                    <td className="px-6 py-4">
                        {resultVal[i * 4 + 5]}
                    </td>
                    <td className="px-6 py-4">
                        {resultVal[i * 4 + 6]}
                    </td>
                </tr>);
            }
            store.push(body);
        });

    }

    return (<div>

        {data.length > 1 && data[1].length > 0 ? data[1].map((resultVal, i) => {
            console.log(resultVal);
            return (<div><div className="m-4 relative overflow-x-auto">
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
                                {resultVal[1]}
                            </th>
                            <td className="px-6 py-4">
                                {resultVal[2].split('\n')[0].split(' ').slice(0, 2).map((a) => a + " ")}
                            </td>
                            <td className="px-6 py-4">
                                {resultVal[resultVal.length - 2]}
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
                            {store[i]}
                        </tbody>
                    </table>
                </div></div>);
        }) : (<div className="mt-24 mb-10 flex justify-center items-center md:text-xl text-md text-slate-100">No such student exists! Try again.</div>)}

        <div className="flex justify-center">
            <button onClick={() => navigate('/')} type="button" className="mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Another result</button>
        </div>

    </div >);
}
