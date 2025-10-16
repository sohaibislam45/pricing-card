import React from 'react';
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const monthlySignUp = [
    { month: "Jan", signups: 35 },
    { month: "Feb", signups: 42 },
    { month: "Mar", signups: 55 },
    { month: "Apr", signups: 48 },
    { month: "May", signups: 62 },
    { month: "Jun", signups: 70 },
    { month: "Jul", signups: 68 },
    { month: "Aug", signups: 75 },
    { month: "Sep", signups: 61 },
    { month: "Oct", signups: 54 },
    { month: "Nov", signups: 66 },
    { month: "Dec", signups: 84 }
];
const LineCharts = () => {
    return (
        <div>
            <div >
                <h2 className='text-center text-2xl font-semibold mb-6'>Our Monthly Signups</h2>
                <div className=' flex justify-center items-center'>
                    <LineChart width={600} height={300} data={monthlySignUp} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        {/* 1. Add Grid lines for readability */}
                        <CartesianGrid strokeDasharray="3 3" />

                        {/* 2. Define the X-axis (category: month) */}
                        <XAxis dataKey="month" />

                        {/* 3. Define the Y-axis (value: signups) */}
                        <YAxis />

                        {/* 4. Add Tooltip for interactive data hovering */}
                        <Tooltip />

                        {/* 5. The Line component plots the Y-axis data (signups) over the X-axis data (month) */}
                        <Line type="monotone" dataKey="signups" stroke="#422AD5" activeDot={{ r: 8 }} />
                    </LineChart>
                </div>
            </div>
        </div>
    );
};

export default LineCharts;