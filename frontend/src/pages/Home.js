import {read_cookie} from 'sfcookies'
import * as axios from '../utils/Axios'

const auth = async () => {
    const cookie = read_cookie('jwt')
    const config = {headers: {authorization: `Bearer ${cookie}`}}
    const response = await axios.get('/home', config)
    console.log(response)
}
auth()
const Home = () => {
    return (
        <div>
            Welcome To Home
        </div>
    );
};


export default Home;
