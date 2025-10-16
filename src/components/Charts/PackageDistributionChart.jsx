import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const package_distribution = [
    { package: "Basic", customers: 120 },
    { package: "Student", customers: 85 },
    { package: "Premium", customers: 45 }
];

const COLORS = ['#3B82F6', '#10B981', '#F59E0B'];

const totalCustomers = package_distribution.reduce((sum, entry) => sum + entry.customers, 0);

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
    
    // Format the percentage
    const percentage = `${(percent * 100).toFixed(0)}%`;
    
    return (
        <text 
            x={x} 
            y={y} 
            fill="white" // Text color
            textAnchor={x > cx ? 'start' : 'end'} 
            dominantBaseline="central"
            className="text-sm font-semibold"
        >
            {percentage}
        </text>
    );
};

const PackageDistributionChart = () => {
    return (
        // Tailwind styling for centering and container
        <div className=" max-w-lg">
            <h2 className="text-2xl text-center font-bold text-gray-800 mb-4">Package Distribution</h2>
            <p className="text-gray-500 text-center mb-6">Total Customers: {totalCustomers}</p>
            
            <PieChart width={400} height={300}>
                <Pie
                    data={package_distribution}
                    dataKey="customers"
                    nameKey="package"
                    cx="50%" // Center X coordinate
                    cy="50%" // Center Y coordinate
                    outerRadius={120}
                    fill="#8884d8"
                    labelLine={false}
                    label={renderCustomizedLabel} // Use the custom label function
                    // Animation is enabled by default
                >
                    {/* Map COLORS to each data segment */}
                    {package_distribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                
                {/* Tooltip shows data when hovering */}
                <Tooltip />
                
                {/* Legend shows the package name and color */}
                <Legend 
                    layout="horizontal" 
                    verticalAlign="bottom" 
                    align="center" 
                    wrapperStyle={{ paddingTop: '20px' }}
                />
            </PieChart>
        </div>
    );
};

export default PackageDistributionChart;