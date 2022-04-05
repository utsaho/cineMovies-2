import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, } from 'recharts';
import useChart from '../../hooks/useChart';
const Barchart = () => {
    const [chart] = useChart([]);
    return (
        <BarChart width={500} height={300} data={chart}>
            <XAxis dataKey="month" />
            <YAxis dataKey="investment" />
            <Tooltip labelClassName='font-bold' />
            <Legend />
            <Bar type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Bar type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </BarChart>
    );
};

export default Barchart;