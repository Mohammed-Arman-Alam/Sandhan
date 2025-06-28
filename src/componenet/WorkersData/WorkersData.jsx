import React, { useEffect, useState } from 'react';
import WorkerData from '../Worker/WorkerData';
const WorkersData = () => {
    const [workers , setWorkers] = useState([]);
    useEffect(() => {
    const workersPromise = fetch('/workersData.json')
      .then((res) => res.json())
      .then(data =>setWorkers(data));
      
      },[])
    return (
        <div className='max-w-sm mx-auto'>
            <form className='bg-orange-300 p-2 w-11/12 mt-2 rounded-3xl'>
                <input type="text" placeholder='Search'/>
            </form>
            <div className='grid grid-cols-2 mx-auto w-11/12'>
                {
                workers.map(worker=><WorkerData key={worker.id} worker={worker}></WorkerData>)
            }
            </div>
            
        </div>
    );
};

export default WorkersData;