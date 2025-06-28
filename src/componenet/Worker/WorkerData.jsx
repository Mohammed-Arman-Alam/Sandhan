import React from 'react';
import workerImg from '../../assets/worker.png';

const WorkerData = ({worker}) => {
    const {name, location} = worker;
    return (
        <div className='w-[140px] mt-4 bg-[#FFE5B4] p-3 rounded-3xl'>
          <img src={workerImg} alt="" /> 
          <h2 className='text-lg text-[#000000] inline whitespace-nowrap'>Name: {name}</h2> 
          <p className='text-sm text-[#00000080]'>Location: {location}</p>
        </div>
    );
};

export default WorkerData;