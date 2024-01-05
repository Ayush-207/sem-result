import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Home({ rolln, handleChange, setData }) {
    const navigate = useNavigate();

    async function getResult() {
        const response = await fetch('http://localhost:3001/getResult?rollno=' + rolln, {
            mode: 'cors',
            method: 'GET'
        });
        const val = await response.json();
        setData(val);
        navigate('/result');
    }

    return (
        <div className="flex h-screen w-screen justify-center items-center">
            <div className="mb-6 flex-col justify-center items-center h-1/3 w-1/5">
                {/* <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Roll </label> */}
                <input onChange={handleChange} value={rolln} placeholder="Roll Number" type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </input>
                <div className="flex justify-center">
                    <button onClick={getResult} type="button" className="mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Get Result</button>
                </div>
            </div>
        </div>
    );
}
