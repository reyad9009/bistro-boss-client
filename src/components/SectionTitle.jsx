import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='py-16'>
            <p className='text-yellow-600 text-center text-xl'>---{subHeading}---</p>
            <h2 className='text-5xl uppercase text-center'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;