import React from 'react'
import experthalf from '../images/reseller.png'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import Logo from '../images/logo.png'
import {
  Link
} from "react-router-dom";

function Shared() {
  // card 
  ; (function ($) {
    if (!$) {
      return;
    }
    $(document).ready(function () {
      var $parent = $('.parent-select-price21');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price21[data-target]');
      if (!$select.length) {
        return;
      }
      $select.each(function () {
        $(this).parent($parent);
        var $target = $(this).attr('data-target');
        if (!$target) {
          return;
        }
        $target = $('[data-price=' + $target + ']');
        if ($target.length === 0) {
          return;
        }
        var $selected = $(this).find('option:selected');
        if ($selected.length) {
          $target.html($selected.val());
        }

        $(this).on('change', function (e) {
          e.stopPropagation();
          $selected = $(this).find('option:selected');
          $target.html($selected.val());
          $('#link_button-21').attr('href', $selected.data('url'));
        });
      });
    });

  })(window.jQuery);
  // 2
  ; (function ($) {
    if (!$) {
      return;
    }
    $(document).ready(function () {
      var $parent = $('.parent-select-price22');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price22[data-target]');
      if (!$select.length) {
        return;
      }
      $select.each(function () {
        $(this).parent($parent);
        var $target = $(this).attr('data-target');
        if (!$target) {
          return;
        }
        $target = $('[data-price=' + $target + ']');
        if ($target.length === 0) {
          return;
        }
        var $selected = $(this).find('option:selected');
        if ($selected.length) {
          $target.html($selected.val());
        }

        $(this).on('change', function (e) {
          e.stopPropagation();
          $selected = $(this).find('option:selected');
          $target.html($selected.val());
          $('#link_button-22').attr('href', $selected.data('url'));
        });
      });
    });

  })(window.jQuery);
  // 3
  ; (function ($) {
    if (!$) {
      return;
    }
    $(document).ready(function () {
      var $parent = $('.parent-select-price23');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price23[data-target]');
      if (!$select.length) {
        return;
      }
      $select.each(function () {
        $(this).parent($parent);
        var $target = $(this).attr('data-target');
        if (!$target) {
          return;
        }
        $target = $('[data-price=' + $target + ']');
        if ($target.length === 0) {
          return;
        }
        var $selected = $(this).find('option:selected');
        if ($selected.length) {
          $target.html($selected.val());
        }

        $(this).on('change', function (e) {
          e.stopPropagation();
          $selected = $(this).find('option:selected');
          $target.html($selected.val());
          $('#link_button-23').attr('href', $selected.data('url'));
        });
      });
    });

  })(window.jQuery);
  // 4
  ; (function ($) {
    if (!$) {
      return;
    }
    $(document).ready(function () {
      var $parent = $('.parent-select-price24');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price24[data-target]');
      if (!$select.length) {
        return;
      }
      $select.each(function () {
        $(this).parent($parent);
        var $target = $(this).attr('data-target');
        if (!$target) {
          return;
        }
        $target = $('[data-price=' + $target + ']');
        if ($target.length === 0) {
          return;
        }
        var $selected = $(this).find('option:selected');
        if ($selected.length) {
          $target.html($selected.val());
        }

        $(this).on('change', function (e) {
          e.stopPropagation();
          $selected = $(this).find('option:selected');
          $target.html($selected.val());
          $('#link_button-24').attr('href', $selected.data('url'));
        });
      });
    });

  })(window.jQuery);

  // scroll from top
  window.scrollTo(0, 0);

  return (
    <>
      <Helmet>
        <script src="/path/to/express.static" type="text/javascript" />
        <title>Best Shared Web Hosting Plans of 2022 - IBXWebHosting</title>
        <meta name='Shared Hosting' />
        <meta name="keywords" content="shared web hosting best shared web hosting plans of 2022 best shared web hosting cheap shared web hosting shared web hosting cheapest shared web hosting" />
        <meta name="description" content="Hoster.pk is offering the best web hosting services in pakistan at affordable rates. We have the best plans with high speed." />
        <meta property="og:title" content="Best Shared Web Hosting Plans of 2022 - Hoster.pk" />
        <meta property="og:description" content="Want to buy shared web hosting plans? Visit IBXWebHosting that is offering variety of packages with extreme storage and speed that tells itself." />
        <meta property="og:image" content={Logo} />
        <Link rel="canonical" href="https://IBXWebHosting/hosting" />
        <meta name="publisher" content="Pakistan IT Solutions (Pvt).Ltd." />
      </Helmet>

      <script language="javascript" src="https://ibxwebhosting.com/clientarea/feeds/productsinfo.php?pid=1&get=description">hj</script>

      {/* main section  */}
      <section className="dedicateMain pt-5">
        <div className="container text-center pt-5">
          <h1 className="fw-bolder my-3">SSD Windows Shared Hosting</h1>
          <hr className="text-primary px-5 mx-5" />

          {/* pricing  */}
          <section className="mb-5 pt-0">
            <h4 className="text-center fw-bolder">Did your needs fall on single hosting that is shareable! Here we have shared hosting in HDD and SDD stats which delivers the demanded speed on the go. The quality is emphasized with 30 days money back guarantee!!
              <a href="https://ibxwebhosting.com/clientarea/submitticket.php" target="_blank" className="ms-3">Contact Us</a></h4>
          </section>
        </div>

        {/* card     */}
        <section className="container-md">
          <div className="text-center row">
            <div className="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
              <div className="bg-grey p-2 m-0  text-light fw-bolder rounded-top">
                <h5 className="mb-0 fw-bolder"> SSD Basic </h5>
              </div>
              <div className="bg-blue p-2 text-light m-0 p-0">
                <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>1<h5 className='m-0 d-inline fw-bolder'> .92 </h5></h3>
                <p className="m-1 fw-bolder"> Monthly </p>
                <p className="m-1 fw-bolder"> *When Ordered Triennially </p>
                <span data-price="plan21" className="text-primary">1 Month $ 3.85</span>
                <div className="form-group parent-select-price21">
                  <select className="m-auto form-control select-price21 text-center" data-target="plan21">
                    <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=monthly">1 Month $ 3.85</option>
                    <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=quarterly">3 Months $ 10.39 Save 10%</option>
                    <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=semi-annually">6 Months $ 18.48 Save 20%</option>
                    <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=annually">1 Year $ 27.72 Save 40%</option>
                    <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=biennually">2 Years $ 50.82 Save 45%</option>
                    <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=triennually">3 Years $ 69.03 Save 50%</option>
                  </select>
                </div>
                <hr />
                <h6 className="m-0 fw-bolder"> Host 1 Website </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> 1GB SSD Cloud Disk Space </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> 10GB Bandwidth </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> 5 FTP Accounts </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> 5 E-mail Accounts </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> WebMail Email Access </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> MailChannels Outbound Spam Filterning </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> POP3/IMAP/SMTP Email Access </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> 1 Maria 10.5 Databases </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> No MsQL Database </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> 1 Free Domain* </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> Dedicated Application Pool Ram </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> Free SSL </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> IIS Web Server </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> Classic ASP </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> ASP.net </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> .NET Core </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> <del> 99.9% </del> <span className="fw-bolder">100% </span> Guaranteed UpTime </h6>
              </div>
              <a id="link_button-21" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=659&amp;billingcycle=monthly">
                <div className="bg-light m-0 bx-shadow py-3 rounded-15">
                  <button className="btn btn-primary text-white fw-bolder w-75 rounded-pill my-2 py-2">
                    Search Domain
                  </button>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
              <div className="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
                <h5 className="mb-0 fw-bolder"> SSD Economy </h5>
              </div>
              <div className="bg-blue p-2 text-light m-0 p-0">
                <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>2<h5 className='m-0 d-inline fw-bolder'> .5 </h5></h3>
                <p className="m-1 fw-bolder"> Monthly </p>
                <p className="m-1 fw-bolder"> *When Ordered Triennially </p>
                <span data-price="plan22" className="text-primary">1 Month $ 5.00</span>
                <div className="form-group parent-select-price22">
                  <select className="m-auto form-control select-price22 text-center" data-target="plan22">
                    <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=monthly">1 Month $ 5.00</option>
                    <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=quarterly">3 Months $ 13.05 Save 10%</option>
                    <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=semi-annually">6 Months $ 24.00 Save 20%</option>
                    <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=annually">1 Year $ 36.00 Save 40%</option>
                    <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=biennually">2 Years $ 66.00 Save 45%</option>
                    <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=triennually">3 Years $ 90.00 Save 50%</option>
                  </select>
                </div>
                <hr />
                <h6 className="m-0 fw-bolder"> Host 2 Website </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> 5GB SSD Cloud Disk Space </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> 20GB Bandwidth </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> 10 FTP Accounts </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> 10 E-mail Accounts </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> WebMail Email Access </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> MailChannels Outbound Spam Filterning </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> POP3/IMAP/SMTP Email Access </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> 3 Maria 10.5 Databases </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> 1 MS SQL Server 2019 Databases </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> 1 Free Domain* </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> Dedicated Application Pool Ram </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> Free SSL </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> IIS Web Server </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> Classic ASP </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> ASP.net </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> .NET Core </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> <del> 99.9% </del> <span className="fw-bolder">100%</span> Guaranteed UpTime </h6>
              </div>
              <a id="link_button-22" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=660&amp;billingcycle=monthly" target="_blank">
                <div className="bg-light m-0 bx-shadow py-3 rounded-15">
                  <button className="btn btn-primary text-white fw-bolder w-75 rounded-pill my-2 py-2">
                    Search Domain
                  </button>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
              <div className="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
                <h5 className="mb-0 fw-bolder"> SSD Deluxe </h5>
              </div>
              <div className="bg-blue p-2 text-light m-0 p-0">
                <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>3<h5 className='m-0 d-inline fw-bolder'> .25 </h5></h3>
                <p className="m-1 fw-bolder"> Monthly </p>
                <p className="m-1 fw-bolder"> *When Ordered Triennially </p>
                <span data-price="plan23" className="text-primary"> 1 Month $ 6.5 </span>
                <div className="form-group parent-select-price23">
                  <select className="m-auto form-control select-price23 text-center" data-target="plan23">
                    <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=monthly">1 Month $ 6.5</option>
                    <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=quarterly">3 Months $ 17.55 Save 10%</option>
                    <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=semi-annually">6 Months $ 31.02 Save 20%</option>
                    <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=annually">1 Year $ 46.08 Save 40%</option>
                    <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=biennually">2 Years $ 85.08 Save 45%</option>
                    <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=triennually"> 3 Years $ 117.00 Save 50%</option>
                  </select>
                </div>
                <hr />
                <h6 className="m-0 fw-bolder"> Host 5 Website </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> 15GB SSD Cloud Disk Space </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> 30GB Bandwidth </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> 30 FTP Accounts </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> 30 E-mail Accounts </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> WebMail Email Access </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> MailChannels Outbound Spam Filterning </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> POP3/IMAP/SMTP Email Access </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> 5 Maria 10.5 Databases </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> 2 MS SQL Server 2019 Databases </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> 1 Free Domain* </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> Dedicated Application Pool Ram </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> Free SSL</h6>
                <hr />
                <h6 className="m-0 fw-bolder"> IIS Web Server </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> Classic ASP </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> ASP.net </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> .NET Core </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> <del> 99.9% </del> <span className="fw-bolder"> 100% </span> Guaranteed UpTime </h6>
              </div>
              <a id="link_button-23" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=661&amp;billingcycle=monthly" target="_blank">
                <div className="bg-light m-0 bx-shadow py-3 rounded-15">
                  <button className="btn btn-primary text-white fw-bolder w-75 rounded-pill my-2 py-2">
                    Search Domain
                  </button>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
              <div className="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
                <h5 className="mb-0 fw-bolder"> SSD Unlimited </h5>
              </div>
              <div className="bg-blue p-2 text-light m-0 p-0">
                <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>4<h5 className='m-0 d-inline fw-bolder'> .22 </h5></h3>
                <p className="m-1 fw-bolder"> Monthly </p>
                <p className="m-1 fw-bolder"> *When Ordered Triennially </p>
                <span data-price="plan24" className="text-primary">1 Month $ 8.45</span>
                <div className="form-group parent-select-price24">
                  <select className="m-auto form-control select-price24 text-center" data-target="plan24">
                    <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=monthly">1 Month $ 8.45</option>
                    <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=quarterly">3 Months $ 22.81 Save 10%</option>
                    <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=semi-annually">6 Months $ 40.56 Save 20%</option>
                    <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=annually">1 Year $ 60.84 Save 40%</option>
                    <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=biennually">2 Years $ 111.54 Save 45%</option>
                    <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=triennually">3 Years $ 152.01 Save 50%</option>
                  </select>
                </div>
                <hr />
                <h6 className="m-0 fw-bolder"> Host 10 Website </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> 20GB SSD Cloud Disk Space </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> 50GB Bandwidth </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> Unlimited FTP Accounts </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> Unlimited E-mail Accounts </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> WebMail Email Access </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> MailChannels Outbound Spam Filterning </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> POP3/IMAP/SMTP Email Access </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> 10 Maria 10.5 Databases </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> 3 MS SQL Server 2019 Databases </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> 1 Free Domain* </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> Dedicated Application Pool Ram </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> Free SSL</h6>
                <hr />
                <h6 className="m-0 fw-bolder"> IIS Web Server </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> Classic ASP </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> ASP.net </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> .NET Core </h6>
                <hr />
                <h6 className="m-0 fw-bolder"> <del> 99.9% </del> <span className="fw-bolder">100%</span> Guaranteed UpTime </h6>
              </div>
              <a id="link_button-24" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=662&amp;billingcycle=monthly" target="_blank">
                <div className="bg-light m-0 bx-shadow py-3 rounded-15">
                  <button className="btn btn-primary text-white fw-bolder w-75 rounded-pill my-2 py-2">
                    Search Domain
                  </button>
                </div>
              </a>
            </div>
          </div>
        </section>

      </section>

      {/* features  */}
      <section className="my-5">
        <div className="container">
          <h1 className="fw-bolder text-center my-3"> Features </h1>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 my-3">
              <h3 className="fw-bolder my-3 bg-grey p-3 text-light rounded"> Why Choose Us </h3>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                30 Days Moneyback Guaranted
              </h6>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                <del className="me-2"> 99.9% </del> 100% UpTime Guaranted
              </h6>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                Free Domain Registeration
              </h6>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                No Hidden Charges
              </h6>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                Enterprise RAID 10 Drives
              </h6>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                Phone, Email, Chat & Whatsapp Support
              </h6>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                In Business Since 2006 with more then <span className="fw-bolder">24000+</span> Sites
              </h6>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                Experienced & Friendly Support Staff
              </h6>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                Multiple Landline & Toll free #Support
              </h6>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 my-3">
              <h3 className="fw-bolder my-3 bg-grey p-3 text-light rounded"> Other Resources </h3>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                FTP Accounts
              </h6>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                Domain Aliases
              </h6>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                Scheduled Tasks , Crontab
              </h6>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                File MIME Types
              </h6>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                File Manager
              </h6>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                Application Packs (Self Install Scripts)
              </h6>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                Raw Log Files
              </h6>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                Web Traffic Statistic
              </h6>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                Flash, Streaming Audio / Video Support
              </h6>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 my-3">
              <h3 className="fw-bolder my-3 bg-grey p-3 text-light rounded"> Supported Products Addons </h3>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                SSL Certificate & Dedicated IP
              </h6>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                Advanced Website Security
              </h6>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                Corporate / Business Email
              </h6>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 my-3">
              <h3 className="fw-bolder my-3 bg-grey p-3 text-light rounded"> Datacenters Specs </h3>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                Redundant Fibre Carriers (6+)
              </h6>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                Six pairs with 2+ strands each
              </h6>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                Automatic failover between fiber pairs.
              </h6>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                24×7 Network Monitoring
              </h6>
              <h6>
                <i className="far fa-check-circle text-primary me-3"></i>
                Nightly Security Updates
              </h6>
            </div>
          </div>
        </div>
      </section>

      {/* expert section  */}
      <section className="bg-blue">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 text-light">
              <div className="text-start">
                <h1 className="fw-bolder display-5 my-4">24/7 Expert Hosting Support Our Customers Love </h1>
                <h6 className="my-4 fw-bold">Objectively innovate highcompellingly progressively pursue mission- critical information quality impretives.</h6>
                <div className="ps-5 ms-4">
                  <span>
                    <a href="javascript:void(Tawk_API.toggle())">
                      <button className="btn btn-light px-3 fw-bolder fs-10px ms-5 btn-lg p-3">LIVE CHAT</button>
                    </a>
                  </span>
                </div>
                <div className="row my-4 text-center">
                  {/* empty  */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img alt="pictures" className="w-100 my-5" src={experthalf} />
            </div>
          </div>
        </div>
      </section>

      {/* footer  */}
      <Footer />
    </>
  )
}

export default Shared;

