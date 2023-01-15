import React from 'react';

const Schedule = ({data}) => {
    return (
        <div>
            <table className="table text-center">
                <thead className='table-active'>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">09:00-10:30</th>
                    <th scope="col">10:30-12:00</th>
                    <th scope="col" className='table-primary'>12:00-13:00</th>
                    <th scope="col">13:00-14:30</th>
                    <th scope="col">14:30-16:00</th>
                </tr>
                </thead>
                <tbody>
                    {data.schedule.map((d) => {
                        return <tr> {d.map((e, index) => {
                            if (index === 0) return <th scope="row" className='table-active'>{e}</th>
                            if (e === 'Interval') return <td className='table-primary'>{e}</td>
                            if (e === 'No Class') return <td className='table-danger'>{e}</td>
                            return <td>{e}</td>
                        })}</tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;