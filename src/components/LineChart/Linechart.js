import React from 'react';
import { Line, LineChart, XAxis, YAxis, Legend, Tooltip } from 'recharts';
import useChart from '../../hooks/useChart';

const Linechart = () => {
    const [chart] = useChart();
    return (
        <LineChart width={500} height={300} data={chart}>
            <Line type="monotone" strokeWidth={2} dataKey='sell' stroke="#8884d8" activeDot={true}></Line>
            <XAxis dataKey='month'></XAxis>
            <YAxis dataKey='sell'></YAxis>
            <Legend />
            <Tooltip labelClassName='font-bold' />
        </LineChart>
    );
};

export default Linechart;