import React from "react";
import { Switch } from "react-router";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { Helmet } from 'react-helmet';

// navbar images 
import MobileLogo from '../src/images/f-logo.png';
import OtherDeviceLogo from '../src/images/logo.png';

// pages 
import Domain from './Components/Domain';
import HomePage from './Components/Main';
import Shared from './Components/Shared';
import AffiliateHome from "./Components/AffiliateHome";
import ResellerMain from "./Components/ResellerMain";
import DedicateMain from "./Components/Dedicate";
import VpsMain from './Components/VpsHome';
import Windows from './Components/Windows';

export default function App() {

  // <!--Start of Tawk.to Script-->
  var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
  (function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/618bca736bb0760a4941ffff/1fk50toql';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
  })();
  // <!--End of Tawk.to Script-->

  return (
    <Helmet>
      <meta property="og:image" content={OtherDeviceLogo} />
    </Helmet>,
    <Router>
      <>

        {/* navbar to show when on mobile device start here */}
        <nav className="mobileTopBar">
          <div className="container bg-grey m-0 text-light">
            <div className="col-lg-7 pt-3">
              <div className="row">
                <div className="col-6">
                  <Link to="/"> <img src={MobileLogo} className="ms-0" alt="logo that will show on mobile screens only" /> </Link>
                </div>
                <div className="col-6">
                  <div className="row pt-2">
                    <p className="col-1 top-pra fw-bolder mx-0"> <a className="col-1 text-decoration-none text-light" href=""> <i className="fab fa-whatsapp text-white"> </i> </a> </p>
                    <p className="col-1 top-pra fw-bolder mx-1"> <a className="col-1 text-decoration-none text-light" href="https://www.facebook.com/ibxweb/" target="_blank"> <i className="fab fa-facebook-f"> </i> </a> </p>
                    <p className="col-1 top-pra fw-bolder mx-0"> <a className="col-1 text-decoration-none text-light" href="https://www.youtube.com/channel/UCQAxN4p6gnl-T0M0UnIOr4w" target="_blank"> <i className="fab fa-youtube"> </i> </a> </p>
                    <p className="col-1 top-pra fw-bolder mx-2"> <a className="col-1 text-decoration-none text-light" href="https://www.linkedin.com/company/ibxweb/" target="_blank"> <i className="fab fa-linkedin-in"> </i> </a> </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 ps-2 pb-3">
              <div className="row container-fluid text-start p-0 text-dark">
                <div className="col-6">
                  <button className="navbar-toggler me-5 btn bg-light mt-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-list navbar-toggler-icon text-dark"></i>
                  </button>
                  <div className="collapse navbar-collapse me-5" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item dropdown">
                        <span className="nav-link text-white ms-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Hosting
                          <p className="fs-10px d-inline ms-1">
                            <i className="fas fa-chevron-down"></i>
                          </p>
                        </span><ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <Link className="text-decoration-none" to="/windows">
                            <li>
                              <span className="dropdown-item " href="#">Windows Hosting</span>
                            </li>
                          </Link>
                          <Link className="text-decoration-none" to="/hosting">
                            <li>
                              <span className="dropdown-item " href="#">Shared Hosting</span>
                            </li>
                          </Link>
                          <Link className="text-decoration-none" to="/reseller">
                            <li>
                              <span className="dropdown-item " href="#">Reseller Hosting</span>
                            </li>
                          </Link>
                          <Link className="text-decoration-none" to="/vps">
                            <li>
                              <span className="dropdown-item " href="#">VPS Hosting</span>
                            </li>
                          </Link>
                          <Link className="text-decoration-none" to="/dedicate">
                            <li>
                              <span className="dropdown-item " href="#">Dedicated Hosting</span>
                            </li>
                          </Link>
                        </ul>
                      </li>
                      <li className="nav-item text-dark">
                        <span href="#" className="nav-link mx-2 text-decoration-none">
                          <a className="text-decoration-none text-white" target="_blank" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;domain=register"> Domain </a>
                        </span>
                      </li>
                      <li className="nav-item dropdown">
                        <span className="nav-link text-white ms-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Partners
                          <p className="fs-10px d-inline ms-1">
                            <i className="fas fa-chevron-down"></i>
                          </p>
                        </span>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <Link className="text-decoration-none" to="/reseller"><li>
                            <span className="dropdown-item " href="#">Reseller Hosting</span>
                          </li>
                          </Link>
                          <Link className="text-decoration-none" to="/Domain">
                            <li>
                              <span className="dropdown-item " href="#">Domain Reseller</span>
                            </li>
                          </Link>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <span className="nav-link mx-2 " href="#">
                          <Link className="text-decoration-none text-white" to="/affiliate"> Affiliate </Link>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 mt-2">
                  <div className="row">
                    <div className="col-6">
                      <button className="btn bg-white rounded w-100"> <p className="m-0"> <a href="https://ibxwebhosting.com/clientarea/submitticket.php" target="_blank" className="text-decoration-none text-dark fw-bolder"> Ticket </a> </p> </button>
                    </div>
                    <div className="col-6">
                      <button className="btn bg-white rounded w-100" type="submit">
                        <p className="m-0">
                          <a target="_blank" className="text-decoration-none text-dark fw-bolder" href="https://ibxwebhosting.com/clientarea/"> Login </a>
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* navbar to show when on mobile device end here */}

        {/* navbar to show on other devices start here */}

        {/* topbar  */}
        <div className="container-fluid row bg-grey m-0 text-light lh-lg OtherDevice">
          <div className="container m-0 p-0">
            <div className="row m-0 p-0">
              <div className="col-lg-10 col-md-6 col-sm-12">
                <div className="row top-row">
                  {/* empty  */}
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 m-0 p-0">
                <div className="d-flex ps-5">
                  <a className="text-decoration-none text-light" href="https://www.facebook.com/ibxweb/" target="_blank"><p className="mx-2 py-0 my-0 top-pra">
                    <i className="fab fa-facebook-f"></i>
                  </p>
                  </a>
                  <a className="text-decoration-none text-light" href="https://www.youtube.com/channel/UCQAxN4p6gnl-T0M0UnIOr4w" target="_blank">
                    <p className="mx-2 py-0 my-0 top-pra">
                      <i className="fab fa-youtube"></i>
                    </p>
                  </a>
                  <a href="https://www.linkedin.com/company/ibxweb/" className="text-white" target="_blank">
                    <p className="mx-2 py-0 my-0 top-pra">
                      <i className="fab fa-linkedin-in"></i>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* navbar  */}
        <nav className="navbar navbar-expand-lg bg-white p-0 m-0 navbar-light py-3">
          <div className="container-fluid text-center p-0">
            <span className="navbar-brand p-0 m-0" href="#">
              <a className="text-decoration-none " to="/">
                <Link to="/"> <img alt="pictures" src={OtherDeviceLogo} className="w-50" /> </Link>
              </a>
            </span>
            <div className="w-60 float-start OtherDevice">
              <div className="my-1">
                <form className='shadow-sm card-form p-2 bg-light mx-1 rounded-pill border-1' action="https://ibxwebhosting.com/clientarea/cart.php?a=add&domain=register" method="post" target='_blank'>
                  <input type="text" name="query" size="20" className='rounded-pill card-input border-0 px-4 bg-light w-100' placeholder='domain.com' />
                  <button type="submit" value="Go" className='rounded-pill card-button btn bg-blue w-50 text-white fw-bolder'> Search Domain </button>
                </form>
              </div>
            </div>
            <button className="navbar-toggler me-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon text-primary">
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav pt-3 mb-lg-0">
                <li className="nav-item mx-2 dropdown">
                  <span className="nav-link text-dark d-flex" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Hosting
                    <p className="fs-10px d-inline ms-1">
                      <i className="fas fa-chevron-down"></i>
                    </p>
                  </span>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="text-decoration-none" to="/windows">
                      <li>
                        <span className="dropdown-item " href="#">Windows Hosting</span>
                      </li>
                    </Link>
                    <Link className="text-decoration-none" to="/hosting">
                      <li>
                        <span className="dropdown-item " href="#">Shared Hosting</span>
                      </li>
                    </Link>
                    <Link className="text-decoration-none" to="/reseller">
                      <li>
                        <span className="dropdown-item " href="#">Reseller Hosting</span>
                      </li>
                    </Link>
                    <Link className="text-decoration-none" to="/vps">
                      <li>
                        <span className="dropdown-item " href="#">VPS Hosting</span>
                      </li>
                    </Link>
                    <Link className="text-decoration-none" to="/dedicate">
                      <li>
                        <span className="dropdown-item " href="#">Dedicated Hosting</span>
                      </li>
                    </Link>
                  </ul>
                </li>
                <li className="nav-item mx-2">
                  <span href="#" className="nav-link text-dark mx-2  text-decoration-none">
                    <a className="text-decoration-none" target="_blank" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;domain=register"> Domain </a>
                  </span>
                </li>
                <li className="nav-item mx-2 dropdown">
                  <span className="nav-link text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Partners <p className="fs-10px d-inline ms-1">
                    <i className="fas fa-chevron-down"></i>
                  </p>
                  </span>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="text-decoration-none" to="/reseller"><li>
                      <span className="dropdown-item " href="#">Reseller Hosting</span>
                    </li>
                    </Link>
                    <Link className="text-decoration-none" to="/Domain">
                      <li>
                        <span className="dropdown-item" href="#">Domain Reseller</span>
                      </li>
                    </Link>
                  </ul>
                </li>
                <li className="nav-item mx-2">
                  <span className="nav-link mx-2 " href="#">
                    <Link className="text-decoration-none" to="/affiliate"> Affiliate </Link>
                  </span>
                </li>
              </ul>
              <button className="btn nav-btn bg-blue rounded-pill px-4 p-2 lh-lg text-white" type="submit">
                <a target="_blank" className="text-decoration-none text-light fw-bolder" href="https://ibxwebhosting.com/clientarea/"> CLIENTAREA </a>
              </button>
            </div>
          </div>
        </nav>
        {/* navbar to show ehrn on other devices end here */}

        <Switch>
          <Route path="/windows">
            <Window />
          </Route>
          <Route path="/dedicate">
            <Dedicate />
          </Route>
          <Route path="/vps">
            <VPS />
          </Route>
          <Route path="/affiliate">
            <Affiliate />
          </Route>
          <Route path="/reseller">
            <Reseller />
          </Route>
          <Route path="/domain">
            <Domain />
          </Route>
          <Route path="/hosting">
            <Hosting />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

function Home() {
  return <HomePage />;
}
function Hosting() {
  return <Shared />;
}
function Reseller() {
  return <ResellerMain />;
}
function Affiliate() {
  return <AffiliateHome />;
}
function VPS() {
  return <VpsMain />;
}
function Dedicate() {
  return <DedicateMain />;
}
function Window() {
  return <Windows />;
}