import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Histogram from './widgets/Histogram.js';
export default function Stats({ data, page }) {

    const navigate = useNavigate();

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    let body = [];
    if (data.length > 0) {
        for (let i = 10; i >= 0; i--) {
            if (page == 'getcoursestats') {
                body.push(
                    <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {i}
                        </th>
                        <td className="px-6 py-4">
                            {/* {data[1][2].split('\n')[0].split(' ').slice(0, 2).map((a) => a + " ")} */}
                            {data[0][i] ? data[0][i] : 0}
                        </td>
                    </tr>
                )
            }
            else {
                body.push(
                    <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {i == 10 ? 10 : i + '- ' + (i + 1)}
                        </th>
                        <td className="px-6 py-4">
                            {/* {data[1][2].split('\n')[0].split(' ').slice(0, 2).map((a) => a + " ")} */}
                            {data[0][i] ? data[0][i] : 0}
                        </td>
                    </tr>
                )
            }

        }
        body.push(<tr key={11} className="font-bold bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Total number of students
            </th>
            <td className="px-6 py-4">
                {/* {data[1][2].split('\n')[0].split(' ').slice(0, 2).map((a) => a + " ")} */}
                {data[1]}
            </td>
        </tr>);
    }
    // console.log(data[0]);
    return (
        <div>
            {data.length > 0 ? (
                <div><div className="m-4 lg:mx-10 relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Range
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Number of Students
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {body}
                        </tbody>
                    </table>
                </div>{windowDimensions.innerWidth > 1000 ? <Histogram width={screen.width / 2} height={300} data={data[0]}></Histogram> : <Histogram width={screen.width / 1.5} height={300} data={data[0]}></Histogram>}
                </div>) : (<div className="mt-24 mb-10 flex justify-center items-center md:text-xl text-md text-slate-100">Incorrect branchcode or coursecode! Try again.</div>)}

            <div className="flex justify-center">
                <button onClick={() => navigate('/')} type="button" className="mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Back</button>
            </div>

        </div >)
}