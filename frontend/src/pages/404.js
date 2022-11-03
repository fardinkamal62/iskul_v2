import Navbar from './component/NavbarOut'

const NotFound = () => {
    return (
        <>
            <Navbar/>
            <div className='m-auto position-absolute top-50 start-50 translate-middle text-danger'>
                <h2>ERROR-404</h2>
                <h5>Page Not Found</h5>
            </div>
        </>
    );
};

export default NotFound;
