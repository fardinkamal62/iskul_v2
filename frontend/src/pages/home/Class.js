import React from 'react';

const Class = ({data}) => {
    return (
        <>
            <div className='text-center h1'>Class Information</div>
            <div>{JSON.stringify(data)}</div>
        </>


    );
};

export default Class;