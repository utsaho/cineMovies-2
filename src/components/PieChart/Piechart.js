import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import useChart from '../../hooks/useChart';
const Piechart = () => {
    const [chart, setChart] = useChart();
    return (
        <PieChart width={500} height={300}>
            <Pie data={chart} dataKey='investment' cx="50%" cy="50%" outerRadius={60} fill="#8884d8"></Pie>
            <Pie data={chart} dataKey='revenue' cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label></Pie>
        </PieChart>
    );
};

export default Piechart;