import React from 'react'
import Logo from '../images/f-logo.png'
import Payment from '../images/payment-methods.png'
// routes
import {
    Link
} from "react-router-dom";

const Footer = () => {
    // scrool from top 
    window.scrollTo(0, 0);
    return (
        <>
            {/* footer upper */}

            <footer >
                <section className="container">
                    <div className="bg-white bx-shadow p-4 mx-5 position-relative top-80 rounded-15">
                        <div className="row">
                            <div className="col-lg-9 col-md-6 col-sm-12 text-start">
                                <h2 className="fw-bolder my-3"> Build Your Website With <span className="text-primary"> IBX Web Hosting </span></h2>
                                <h6 className="text-secondary fw-bold"> you can build perfect website without any coding or skill. Includes everything you need and  24/7 support just in case you get stuck. </h6>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <a href="https://ibxwebhosting.com/clientarea/submitticket.php" target="_blank"><button className="btn btn-primary text-light rounded-pill px-5 p-2 btn-mobile">Contact Us</button></a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* footer  */}
                <div className="container-fluid px-5 bg-blue pt-5">
                    <div className="pt-5" >
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 text-light f-logo-mobile">
                                <span className="navbar-brand p-0 m-0" href="#"> <Link to="/" className="text-decoration-none "><img alt="pictures" src={Logo} className="w-75" /></Link></span>
                                <p className='fw-bolder'>We are Professional company serving in Website Management and Hosting and Domain, Data security, Application android and IOS developement services.</p>
                                <h4 className="d-flex f-icon-mobile">
                                    <a href="https://www.facebook.com/ibxweb" className="text-white" target="_blank"><i className="mx-3 mt-4 fab fa-facebook-f"></i></a>
                                    <a href="https://www.linkedin.com/company/ibxweb/" className="text-white" target="_blank"><i className="mx-3 mt-4 fab fa-linkedin-in"> </i></a>
                                    <a href="https://www.youtube.com/channel/UCQAxN4p6gnl-T0M0UnIOr4w" className="text-white" target="_blank"><i className="mx-3 mt-4 fab fa-youtube"></i></a>
                                </h4>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 f-side-by-side text-light py-5 mb-2">
                                <h3 className="fw-bolder">Services</h3>
                                <h6 className="nav-link text-white m-0 p-0" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hosting <p className="d-inline fw-lighter"> <i className="fas fa-chevron-down"></i> </p>
                                </h6>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/hosting" className="text-decoration-none"><li><span className="dropdown-item " href="#">Shared Hosting</span></li></Link>
                                    <Link to="/reseller" className="text-decoration-none"><li><span className="dropdown-item " href="#">Reseller Hosting</span></li></Link>
                                    <Link to="/vps" className="text-decoration-none"><li><span className="dropdown-item " href="#">VPS Hosting</span></li></Link>
                                    <Link to="/dedicate" className="text-decoration-none"><li><span className="dropdown-item " href="#">Dedicated Hosting</span></li></Link>
                                </ul>
                                <a href="https://ibxwebhosting.com/clientarea/" className="text-decoration-none text-white" target="_blank"><h6 className="fw-bold">Domains</h6></a>
                                <Link to={`/affiliate`} className="text-decoration-none text-white"><h6 className="fw-bold">Affiliate</h6></Link>
                                <div className="f-payment">
                                    <h5 className="my-2 fw-bolder text-center ms-5 ps-5">Payments Methods:</h5>
                                    <img src={Payment} alt="payment methods" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 f-side-by-side text-light py-5">
                                <h3 className="fw-bolder">Support</h3>
                                <a href="https://ibxwebhosting.com/clientarea/" rel="noreferrer" className="text-decoration-none text-light" target="_blank"><h6 className="fw-bold">Your Account</h6></a>
                                <a href="https://ibxwebhosting.com/clientarea/submitticket.php" rel="noreferrer" className="text-decoration-none text-light" target="_blank"><h6 className="fw-bold">Tickets</h6></a>
                                <a href="https://ibxwebhosting.com/clientarea/index.php?rp=/knowledgebase" rel="noreferrer" className="text-decoration-none text-light" target="_blank"><h6 className="fw-bold">Knowledgebase</h6></a>
                                <a href="https://ibxwebhosting.com/faq/" rel="noreferrer" className="text-decoration-none text-light" target="_blank"> <h6 className="fw-bold">FAQs</h6></a>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 text-light py-5">
                                <h4 className="fw-bolder"> Contact Us </h4>
                                <p className="d-flex fw-bolder my-2">
                                    <span className="f-icon1 bg-white me-3 mb-0 p-3 rounded-circle">
                                        <span><i className="fas fa-map-marker-alt text-primary"></i></span></span> Byron Road Luton Beds LU4 0HX United Kingdom </p>
                                <h6 className="d-flex fw-bolder my-2">
                                    {/* empty  */}
                                </h6>
                                <h6 className="d-flex fw-bolder my-2">
                                    {/* empty  */}
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* footer under  */}
            <section className="bg-grey text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-ms-12 text-start">
                            <p className="m-0 my-2">Copyright 2006-2021 © IBXWebHosting. All Rights Reserved</p>
                        </div>
                        <div className="col-lg-6 col-md-6 f-payment">
                            <p className="m-0 my-2">Powered By <a href="https://pits.pk" title="Pakistan IT Solutions (Private.) Limited." className="text-decoration-none text-white">PITS.Pk</a></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* get on top */}
            <a href="#Top" className="text-white">
                <button className="scrollbutton btn bg-blue p-2 fw-bolder text-white px-4 fs-5">
                    <i className="fas fa-hand-point-up"></i>
                </button>
            </a>
        </>
    )
}

export default Footer
