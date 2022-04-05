import React from 'react';
import { PieChart, Pie } from 'recharts';
import useChart from '../../hooks/useChart';
const Piechart = (props) => {
    const [chart] = useChart();
    return (
        <div>
            <h2 className='text-center text-xl font-bold text-indigo-600'>{props.children}</h2>
            <PieChart width={500} height={300}>
                <Pie data={chart} dataKey='investment' cx="50%" cy="50%" outerRadius={60} fill="#8884d8"></Pie>
                <Pie data={chart} dataKey='revenue' cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label></Pie>
            </PieChart>
        </div>
    );
};

export default Piechart;