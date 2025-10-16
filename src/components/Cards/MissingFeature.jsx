import React from 'react';

const MissingFeature = ({feature}) => {
    return (
        <div>
            <li className="opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span className="line-through">{feature}</span>
            </li>
        </div>
    );
};

export default MissingFeature;