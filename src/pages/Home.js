import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'flowbite-react';
// import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';

// import { Flowbite } from 'flowbite-react';




export default function Home({ rolln, handleChange, setData }) {
    const navigate = useNavigate();


    return (
        <div className="flex h-screen w-screen justify-center items-center">
            <div className="flex-col justify-center items-center lg:w-1/2 w-9/12">
                <div className="flex justify-center">
                    <button id="btn" onClick={() => { navigate('/get_result') }} className="lg:w-1/3 w-1/2 mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Get Result</button>
                </div>
                <div className='mt-8 flex flex-wrap justify-evenly'>
                    <button id="btn-2" onClick={() => { navigate('getcoursestats') }} className="lg:w-1/3 w-1/2 mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Get Course Statistics</button>
                </div>
                <div className='mt-8 flex flex-wrap justify-evenly'>
                    <button id="btn-3" onClick={() => { navigate('getoverallstats') }} className="lg:w-1/3 w-1/2 mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm  px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Get Overall Statistics</button>

                </div>
                <div className="flex justify-center mt-8">
                    <button id="grade-btn" onClick={() => { navigate('/get_rank') }} type="submit" className="lg:w-1/3 w-1/2 mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Get Rank</button>
                </div>
            </div>
        </div>
    );
}
