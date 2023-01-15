const style = {
    "width": '15%', "height": 'auto', "margin": "0 45 0"
}

const Personal = ({data, page}) => {
    const userInfo = data.data;
    const pass = e => page(e);
    return (
        <>
            <div className='h1 text-center'>Personal Information</div>
            <hr/>
            <div className='position-relative'>
                <button id='editProfile' type='button' className='btn btn-outline-primary position-absolute end-0' onClick={(e) => pass(e)}><span
                    className='bi bi-pencil-square'/> Edit
                </button>
            </div>
            <img src={`${process.env.PUBLIC_URL}/profile_photo/${userInfo.profile_photo}`}
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