import React, {useState} from 'react';

import Schedule from './Class/Schedule';
import Attendance from "./Class/Attendance";

// const auth = async (link) => {
//     const response = await axios.get(`/home/class?section=${link}`);
//     console.log(response)
//     if (response.code !== 200) {
//         window.location.href = "http://127.0.0.1:3000/login";
//     }
//     return response;
// };

const Class = ({data}) => {
    const classData = data.data[0];
    // To handle radio buttons
    const [radio, changeRadio] = useState(true);

    // useMemo(() => {
    //     (async () => {
    //         await auth('schedule')
    //     })()
    // }, [])
    return (
        <>
            <div className='h1 text-center'>Class Information</div>
            <hr/>
            <div className="btn-group badge" role="group">
                <input type="radio" className="btn-check" name="class_sch" id="class_sch" autoComplete="off"
                       checked={radio} onChange={() => changeRadio(!radio)}/>
                <label className="btn btn-outline-primary" htmlFor="class_sch">Class Schedule</label>

                <input type="radio" className="btn-check" name="att" id="att" autoComplete="off" checked={!radio}
                       onChange={() => {
                           changeRadio(!radio)
                       }}/>
                <label className="btn btn-outline-primary" htmlFor="att">Attendance</label>
            </div>
            {radio ? <Schedule data={classData}/> : <Attendance/>}
        </>


    );
};

export default Class;