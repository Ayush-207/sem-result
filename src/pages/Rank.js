
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Rank({ branchcode, handleChange2 }) {
    const navigate = useNavigate();

    const [yoa, setYoa] = useState('');

    function handleChangeYoa(event) {
        setYoa(event.target.value);
    }
    const [grade, setGrade] = useState('');
    const [rank, setRank] = useState('Rank');

    function handleChangeGrade(event) {
        setGrade(event.target.value);
    }

    async function getRank() {
        if (yoa > '2023' || yoa < '2020' || yoa == '') {
            window.alert("Invalid Year of Admission");
        }
        else if (grade != '') {
            console.log(grade);
            const response = await fetch('https://sem-result-server.onrender.com/getrank?grade=' + grade + '&yoa=' + yoa + '&branchcode=' + branchcode, {
                mode: 'cors',
                method: 'GET'
            });
            const val = await response.json();
            setRank(val);
            // window.alert('Your university rank is ' + val);
        }
    }

    return (
        <div className="flex h-screen w-screen justify-center items-center">
            <div className="mb-6 flex-col justify-center items-center lg:h-1/3 lg:w-1/5 w-1/2 h-1/4">
                {/* <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Roll </label> */}

                <form onSubmit={(e) => { e.preventDefault(); getRank(); }}>
                    <input required id="grade-input" onChange={handleChangeGrade} value={grade} placeholder="Enter CGPA" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </input>
                    <input required id="yoa" onChange={handleChangeYoa} value={yoa} placeholder="Year of Admission" type="text" className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </input>
                    <input id="branchcode" onChange={handleChange2} value={branchcode} placeholder="Branch Code(UIT)/Leave blank for overall" type="text" className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </input>
                    <div className="flex justify-center">
                        <button id="grade-btn" onClick={getRank} type="submit" className="mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Get Rank</button>
                        <button onClick={() => navigate('/')} type="button" className="mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Back</button>
                    </div>
                </form>
                <input id="rank" disabled value={rank} placeholder={rank} type="text" className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </input>
            </div>
        </div>
    );
}
