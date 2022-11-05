import React from 'react';
import {Link} from 'react-router-dom'

const Sidebar = ({page}) => {
    const pass = e => page(e)
    return (
        <>
            <div className="offcanvas-start w-25 offcanvas shadow-lg" style={{overflow:'scroll'}} tabIndex="-1" id="offcanvas" data-bs-keyboard="false"
                 data-bs-backdrop="false">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
    aria-label="Close"/>
                </div>
                <div className="offcanvas-body">
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
                        <li className="nav-link">
                            <Link to=''><i className="fs-5 bi-house"/><span className="ms-1 d-none d-sm-inline span-button" id='personal' onClick={(e)=>{
                                pass(e)}}>Personal Info</span></Link>
                        </li>
                        <li className="nav-link">
                            <Link to=''><i className="bi-info-circle-fill fs-5"/><span className="ms-1 d-none d-sm-inline span-button" id='class' onClick={(e)=>{
                                pass(e)}}>Class Info</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                            <Link><i className="bi bi-list fs-2" data-bs-toggle="offcanvas"
                               data-bs-target="#offcanvas"/></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;