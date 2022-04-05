import React from 'react';
import Linechart from '../LineChart/Linechart';
import Areachart from '../AreaChart/Areachart';
import Barchart from '../BarChart/Barchart';
import Piechart from '../PieChart/Piechart';

const Dashboard = () => {
    return (
        <div className='grid gird-cols-2 mt-10'>
            <Linechart></Linechart>
            <Areachart></Areachart>
            <Barchart></Barchart>
            <Piechart></Piechart>
        </div>
    );
};

export default Dashboard;