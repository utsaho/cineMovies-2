import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import useChart from '../../hooks/useChart';
const Barchart = (props) => {
    const [chart] = useChart([]);
    return (
        <div>
            <h2 className='text-center text-xl font-bold text-indigo-600'>{props.children}</h2>
            <BarChart width={500} height={300} data={chart}>
                <XAxis dataKey="month" />
                <YAxis dataKey="investment" />
                <Tooltip labelClassName='font-bold' />
                <Legend />
                <Bar type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Bar type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default Barchart;