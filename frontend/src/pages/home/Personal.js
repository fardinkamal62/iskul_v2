const style = {
    "width": '15%', "height": 'auto', "margin": "0 45 0"
}

const Personal = (props) => {
    const userInfo = props.data.data
    return (
        <>
            <div className='h1 text-center'>Personal Information</div>
            <hr/>
            <img src="https://avatars.githubusercontent.com/u/70953546?v=4"
                 className="img-fluid d-sm-block d-none rounded-circle mx-auto" alt="user"
                 style={style}/>
            <div>
                <ul>
                <li className='list-group-item'><b>Name</b> : {userInfo.name}</li>
                <li className='list-group-item'><b>Department</b> : {userInfo.department}</li>
                <li className='list-group-item'><b>Roll</b> : {userInfo.roll}</li>
                <li className='list-group-item'><b>Registration Number</b> : {userInfo.code}</li>
                <li className='list-group-item'><b>Email</b> : {userInfo.email}</li>
                <li className='list-group-item'><b>Phone</b> : {userInfo.phone}</li>
                </ul>
            </div>
        </>
    );
};

export default Personal;