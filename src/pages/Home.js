import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'flowbite-react';
// import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';

// import { Flowbite } from 'flowbite-react';




export default function Home({ rolln, handleChange, setData }) {
    const navigate = useNavigate();
    const [grade, setGrade] = useState('');
    // const [rank, setRank] = useState(null);
    function handleChangeGrade(event) {
        setGrade(event.target.value);
    }

    async function getRank() {
        if (grade != '') {
            console.log(grade);
            const response = await fetch('http://localhost:3001/getrank?grade=' + grade, {
                mode: 'cors',
                method: 'GET'
            });
            const val = await response.json();
            // setRank(val);
            window.alert('Your university rank is ' + val);
        }
    }

    return (
        <div className="flex h-screen w-screen justify-center items-center">
            <div className="mb-6 flex-col justify-center items-center lg:w-1/2 w-9/12">
                <div className="flex justify-center">
                    <button id="btn" onClick={() => { navigate('/get_result') }} className="lg:w-1/3 w-1/2 mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Get Result</button>
                </div>
                <div className='mt-8 flex flex-wrap justify-evenly'>
                    <button id="btn-2" onClick={() => { navigate('get_course_stats') }} className="lg:w-1/3 w-1/2 mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg lg:text-sm text-xs px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Get Course Statistics</button>

                    <button id="btn-3" onClick={() => { navigate('get_overall_stats') }} className="lg:w-1/3 w-1/2 mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg lg:text-sm text-xs px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Get Overall Statistics</button>

                    {/* <Dropdown renderTrigger=>
                        <Dropdown.Item>In Branch</Dropdown.Item>
                        <Dropdown.Item>In College</Dropdown.Item>
                    </Dropdown> */}
                    {/* <Dropdown renderTrigger=>
                        <Dropdown.Item>In Branch</Dropdown.Item>
                        <Dropdown.Item>In College</Dropdown.Item>
                    </Dropdown> */}
                    {/* <button type="button" class="group flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-cyan-700 border border-transparent enabled:hover:bg-cyan-800 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800 rounded-lg focus:ring-2 w-fit" data-testid="flowbite-dropdown-target" aria-expanded="false" aria-haspopup="menu" id=":r3:"><span class="flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2">Dropdown button<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" class="ml-2 h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path></svg></span></button> */}
                </div>
                <div className='mt-10 flex justify-center'>
                    <form onSubmit={(e) => { e.preventDefault(); getRank(); }}>
                        <input id="grade-input" onChange={handleChangeGrade} value={grade} placeholder="Enter CGPA" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </input>
                        <div className="flex justify-center">
                            <button id="grade-btn" onClick={getRank} type="submit" className="mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Get Rank</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
