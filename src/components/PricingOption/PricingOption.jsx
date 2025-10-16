import React, { use } from 'react';
import Card from '../Cards/Card';

const PricingOption = ({ dataPromise }) => {
    const data = use(dataPromise);
    // console.log(data)
    return (
        <div className='max-w-[1400px] mx-auto mt-[60px]'>
            <h1 className='text-center text-4xl font-bold mb-10'>Our Pricing Categories</h1>
            <div className='flex flex-col md:flex-row gap-10  justify-center'>
                {
                    data.map(price=><Card key={price.id} price={price}></Card>)
                }
            </div>
        </div>
    );
};

export default PricingOption;