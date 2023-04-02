import React from "react";

import Navbar from './pages/component/NavbarOut'

function App() {
    return (<>
            <Navbar/>
            <div className="container m-5 d-flex flex-column text-center">
                <h1>Hello 👋</h1>
                <h3>Welcome to Iskul-2</h3>
                <h5>V2 of my old project <a href='https://github.com/fardinkamal62/iskul' target='_blank'>Iskul</a></h5>
                <h5>Built on MERN Stack</h5>
                <hr style={{color: 'white'}}/>
                <h5>Still in progress 🚧</h5>
            </div>
        </>
    );
}

export default App;
