import React from 'react';
import { ResponsiveContainer } from 'recharts'
import Linechart from '../LineChart/Linechart';
import Areachart from '../AreaChart/Areachart';
import Barchart from '../BarChart/Barchart';
import Piechart from '../PieChart/Piechart';

const Dashboard = () => {
    return (
        <div className='grid md:grid-cols-2 sm:grid-cols-1 mt-14 gap-5'>
            <ResponsiveContainer width="100%">
                <Linechart>MONTH WISE SELL</Linechart>
            </ResponsiveContainer>
            <ResponsiveContainer width="100%">
                <Areachart>Investment VS Revenue</Areachart>
            </ResponsiveContainer>
            <ResponsiveContainer width="100%">
                <Barchart>Investment VS Revenue</Barchart>
            </ResponsiveContainer>
            <ResponsiveContainer width="100%">
                <Piechart>Investment VS Revenue</Piechart>
            </ResponsiveContainer>
        </div>
    );
};

export default Dashboard;