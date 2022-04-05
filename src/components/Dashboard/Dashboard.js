import React from 'react';
import { ResponsiveContainer } from 'recharts'
import Linechart from '../LineChart/Linechart';
import Areachart from '../AreaChart/Areachart';
import Barchart from '../BarChart/Barchart';
import Piechart from '../PieChart/Piechart';

const Dashboard = () => {
    return (
        <div className='grid md:grid-cols-2 sm:grid-cols-1 mt-10 gap-5'>
            <ResponsiveContainer width="100%" className='border-2'>
                <Linechart></Linechart>
            </ResponsiveContainer>
            <ResponsiveContainer width="100%">
                <Areachart></Areachart>
            </ResponsiveContainer>
            <ResponsiveContainer width="100%">
                <Barchart></Barchart>
            </ResponsiveContainer>
            <ResponsiveContainer width="100%">
                <Piechart></Piechart>
            </ResponsiveContainer>
        </div>
    );
};

export default Dashboard;