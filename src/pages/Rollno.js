import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Rollno({ setData, page }) {
    if (page != 'rollno') {
        page = 'name';
    }
    const navigate = useNavigate();
    const [rolln, setRolln] = useState("");
    const [name, setName] = useState("");
    const [yoa, setYoa] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    function handleChange(event) {
        if (page == 'rollno')
            setRolln(event.target.value);
        else setName(event.target.value);
    }
    function handleChangeYoa(event) {
        setYoa(event.target.value);
    }
    async function getResult() {
        try {
            let query = '';
            if (page == 'rollno') {
                query = 'rollno=' + rolln.toUpperCase();
            }
            else query = 'name=' + name.toUpperCase() + '&yoa=' + yoa;
            setIsLoading(true);
            const response = await fetch('https://sem-result-server.onrender.com/getresult?' + query, {
                mode: 'cors',
                method: 'GET'
            });
            const val = await response.json();
            // console.log(val);
            setData(val);
            setIsLoading(false);
            navigate('/result');
        }
        catch (e) {
            setIsLoading(false);
            console.log(e);
        }
    }


    return (
        <div className="flex h-screen w-screen justify-center items-center">
            <div className="mb-6 flex-col justify-center items-center lg:h-1/3 lg:w-1/5 w-1/2 h-1/4">
                {/* <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Roll </label> */}
                {isLoading ? <div className='flex flex-row justify-center'><h1 className='text-gray-200 text-lg md:text-2xl'>Fetching Data...</h1></div> : <form onSubmit={(e) => { e.preventDefault(); getResult(); }}>
                    {page == 'rollno' ? <input id="rollnum" onChange={handleChange} value={rolln} placeholder="Roll Number" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </input> : <><input id="name" onChange={handleChange} value={name} placeholder="Enter Name" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </input> <input required id="yoa" onChange={handleChangeYoa} value={yoa} placeholder="Year of Admission" type="text" className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </input></>}
                    <div className="flex justify-center">
                        <button id="btn" onClick={getResult} type="submit" className="mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Get Result</button>
                        <button onClick={() => navigate('/')} type="button" className="mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Back</button>
                    </div>
                </form>}

            </div>
        </div>
    );
}
