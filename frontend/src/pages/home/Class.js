import React from 'react';

const Class = ({data}) => {
    const classInfo = data.data
    return (
        <>
            <div className='h1 text-center'>Class Information</div>
            <hr/>
            <div>{JSON.stringify(classInfo)}</div>
        </>


    );
};

export default Class;