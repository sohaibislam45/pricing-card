import React from 'react';
import Feature from '../Cards/Feature'
import MissingFeature from './MissingFeature';

const Card = ({ price }) => {
    const { package_name, popularity, price_per_month, access_time, features, missing_features } = price;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-md">
                <div className="card-body">
                    <span
                        className={`badge badge-xs p-2 
                                ${popularity === 'most popular'
                                ? 'bg-red-500 text-white'
                                : popularity === 'budget friendly'
                                    ? 'bg-green-400 text-black'
                                    : popularity === 'exclusive'
                                        ? 'bg-yellow-400 text-black'
                                        : 'bg-gray-300 text-black'
                            }`}
                    >
                        {popularity}
                    </span>
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">{package_name}</h2>
                        <span className="text-xl">৳ {price_per_month}/month</span>
                    </div>
                    <h4 className='font-semibold'>Access Time: {access_time}</h4>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        {
                            features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                        }

                        {
                            missing_features.map((feature, index) => <MissingFeature key={index} feature={feature}></MissingFeature>)
                        }

                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary btn-block">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;