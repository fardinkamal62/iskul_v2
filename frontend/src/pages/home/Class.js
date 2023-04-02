import React, {useState} from 'react';

import Schedule from './Class/Schedule';

const Class = ({data}) => {
    const classData = data.data[0];
    return (
        <>
            <div className='h1 text-center'>Class Information</div>
            <hr/>
            <Schedule data={classData}/>
        </>


    );
};

export default Class;