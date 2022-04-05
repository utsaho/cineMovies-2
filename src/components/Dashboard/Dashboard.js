import React from 'react';
import Linechart from '../LineChart/Linechart';
import Areachart from '../AreaChart/Areachart';

const Dashboard = () => {
    return (
        <div className='grid gird-cols-2 mt-10'>
            <Linechart></Linechart>
            <Areachart></Areachart>
        </div>
    );
};

export default Dashboard;