import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import useChart from '../../hooks/useChart';
const Areachart = (props) => {
    const [chart] = useChart();
    return (
        <div>
            <h2 className='text-center text-xl font-bold text-indigo-600'>{props.children}</h2>
            <AreaChart width={500} height={400} data={chart}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis dataKey="investment" />
                <Tooltip labelClassName='font-bold' />
                <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
        </div>
    );
};

export default Areachart;