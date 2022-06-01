import React from 'react'

const Card3 = () => {
  ; (function ($) {
    if (!$) {
      return;
    }
    $(document).ready(function () {
      var $parent = $('.parent-select-price9');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price9[data-target]');
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
          $('#link_button-9').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price10');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price10[data-target]');
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
          $('#link_button-10').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price11');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price11[data-target]');
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
          $('#link_button-11').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price12');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price12[data-target]');
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
          $('#link_button-12').attr('href', $selected.data('url'));
        });
      });
    });

  })(window.jQuery);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div className="bg-grey p-2 m-0  text-light fw-bolderc rounded-top">
              <h5 className="mb-0 fw-bolder"> WP Basic </h5>
            </div>
            <div className="bg-blue p-2 px-3 text-light m-0 p-0">
              <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>3<h5 className='m-0 d-inline fw-bolder'> .26 </h5></h3>
              <p className="m-1 fw-bolder"> Monthly </p>
              <p className="m-1 fw-bolder"> *When Ordered Triennally </p>
              <span data-price="plan9" className="text-primary">1 Month $6.52</span>
              <div className="form-group parent-select-price9 text-center">
                <select className="m-auto form-control select-price9" data-target="plan9">
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=667&amp;billingcycle=monthly">1 Month $ 6.52</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=667&amp;billingcycle=quarterly">3 Months $ 17.60 Save 10%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=667&amp;billingcycle=semi-annually">6 Months $ 31.29 Save 20%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=667&amp;billingcycle=annually">1 Year $ 46.94 Save 40%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=667&amp;billingcycle=biennually">2 Years $ 86.06 Save 45%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=667&amp;billingcycle=triennually">3 Years $ 117.36 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 className="m-0 fw-bolder"> IO 1MB/s </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> IOPS 1024 </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> EP 20 </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1.5GB RAM </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> CPU 100% </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Enable Gzip </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1 Databases </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 10GB Bandwidth </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1 Free Domain* </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Host 1 Website </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 3 FTP Accounts </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Enable Keep-Alive </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 3 E-mail Accounts </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Free SSL </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1GB Internet Port </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1 GB NVMe Storage </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Enable mod_pagespeed </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Enable Browser Caching </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Disable Image Hotlinking </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Gzip Deflate Compression </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Automatically WP Installed </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Expires headers to leverage browser caching </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> <del> 99.9% </del> <span className="fw-bolder">100%</span> Guaranted UpTime </h6>
            </div>
            <a target="_blank" id="link_button-9" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=667&amp;billingcycle=monthly">
              <div className="bg-light m-0 bx-shadow py-3 rounded-15">
                <button className="btn btn-primary text-white fw-bolder w-75 rounded-pill my-2 py-2">
                  Search Domain
                </button>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div className="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 className="mb-0 fw-bolder"> WP Economy </h5>
            </div>
            <div className="bg-blue p-2 px-3 text-light m-0 p-0">
              <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>4<h5 className='m-0 d-inline fw-bolder'> .6 </h5></h3>
              <p className="m-1 fw-bolder"> Monthly </p>
              <p className="m-1 fw-bolder"> *When Ordered Triennally </p>
              <span data-price="plan10" className="text-primary"> 1 Month $ 9.20 </span>
              <div className="form-group parent-select-price10">
                <select className="m-auto form-control select-price10" data-target="plan10">
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=668&amp;billingcycle=monthly">1 Month $ 9.20</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=668&amp;billingcycle=quarterly">3 Months $ 24.84 Save 10%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=668&amp;billingcycle=semi-annually">6 Months $ 44.15 Save 20%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=668&amp;billingcycle=annually">1 Year $ 66.24 Save 40%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=668&amp;billingcycle=biennually">2 Years $ 121.44 Save 45%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=668&amp;billingcycle=triennually">3 Years $ 165.06 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 className="m-0 fw-bolder"> IO 1MB/s </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> IOPS 2000 </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> EP 30 </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 2GB RAM </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> CPU 100% </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Enable Gzip </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 3 Databases </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 20GB Bandwidth </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1 Free Domain* </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Host 1 Website </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 5 FTP Accounts </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Enable Keep-Alive </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 5 E-mail Accounts </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Free SSL </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1GB Internet Port </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 3 GB NVMe Storage </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Enable mod_pagespeed </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Enable Browser Caching </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Disable Image Hotlinking </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Gzip Deflate Compression </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Automatically WP Installed </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Expires headers to leverage browser caching </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> <del>99.9%</del> <span className="fw-bolder">100%</span> Guaranteed UpTime</h6>
            </div>
            <a target="_blank" id="link_button-10" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=668&amp;billingcycle=monthly"><div className="bg-light m-0 bx-shadow py-3 rounded-15">
              <button className="btn btn-primary text-white fw-bolder w-75 rounded-pill my-2 py-2">
                Search Domain
              </button>
            </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div className="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 className="mb-0 fw-bolder"> WP Deluxe </h5>
            </div>
            <div className="bg-blue p-2 px-3 text-light m-0 p-0">
              <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>7<h5 className='m-0 d-inline fw-bolder'> .19 </h5></h3>
              <p className="m-1 fw-bolder"> Monthly </p>
              <p className="m-1 fw-bolder"> *When Ordered Triennally </p>
              <span data-price="plan11" className="text-primary">1 Month $ 14.39</span>
              <div className="form-group parent-select-price11">
                <select className="m-auto form-control select-price11" data-target="plan11">
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=669&amp;billingcycle=monthly">1 Month $ 14.39</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=669&amp;billingcycle=quarterly">3 Months $ 38.85 Save 10%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=669&amp;billingcycle=semi-annually">6 Months $ 69.07 Save 20%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=669&amp;billingcycle=annually">1 Year $ 103.60 Save 40%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=669&amp;billingcycle=biennually">2 Years $ 189.94 Save 45%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=669&amp;billingcycle=triennually"> 3 Years $ 259.02 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 className="m-0 fw-bolder"> IO 2MB/s </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> IOPS 3000 </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> EP 40 </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 3GB RAM </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> CPU 150% </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Enable Gzip </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 10 Databases </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 30GB Bandwidth </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1 Free Domain* </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Free SSL </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Host 3 Website </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 10 FTP Accounts </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Enable Keep-Alive </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 10 E-mail Accounts </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1GB Internet Port </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 10 GB NVMe Storage </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Enable mod_pagespeed </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Enable Browser Caching </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Disable Image Hotlinking </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Gzip Deflate Compression</h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Automatically WP Installed </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Expires headers to leverage browser caching</h6>
              <hr />
              <h6 className="m-0 fw-bolder"> <del>99.9%</del> <span className="fw-bolder">100%</span> Guaranteed UpTime </h6>
            </div>
            <a target="_blank" id="link_button-11" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=669&amp;billingcycle=monthly">
              <div className="bg-light m-0 bx-shadow py-3 rounded-15">
                <button className="btn btn-primary text-white fw-bolder w-75 rounded-pill my-2 py-2">
                  Search Domain
                </button>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div className="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 className="mb-0 fw-bolder"> WP Unlimited </h5>
            </div>
            <div className="bg-blue p-2 px-3 text-light m-0 p-0">
              <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>11<h5 className='m-0 d-inline fw-bolder'> .71 </h5></h3>
              <p className="m-1 fw-bolder"> Monthly </p>
              <p className="m-1 fw-bolder"> *When Ordered Triennally </p>
              <span data-price="plan12" className="text-primary">1 Month $ 23.42</span>
              <div className="form-group parent-select-price12">
                <select className="m-auto form-control select-price12" data-target="plan12">
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=662&amp;billingcycle=monthly">1 Month $ 23.42</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=662&amp;billingcycle=quarterly">3 Months $ 63.23 Save 10%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=662&amp;billingcycle=semi-annually">6 Months $ 112.41 Save 20%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=662&amp;billingcycle=annually">1 Year $ 168.62 Save 40%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=662&amp;billingcycle=biennually">2 Years $ 309.14 Save 45%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=662&amp;billingcycle=triennually">3 Years $ 421.56 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 className="m-0 fw-bolder"> IO 3MB/s </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> IOPS 4000 </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> EP 60 </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 4GB RAM </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> CPU 200% </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Enable Gzip </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1 Free Domain* </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Host 10 Website </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Enable Keep-Alive </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Free SSL </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1GB Internet Port </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 20 GB NVMe Storage </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 100 Bandwidth* </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Databases </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Enable mod_pagespeed </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Enable Browser Caching </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited FTP Accounts </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Disable Image Hotlinking </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Gzip Deflate Compression </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited E-mail Accounts </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Automatically WP Installed </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Expires headers to leverage browser caching </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> <del>99.9%</del> <span className="fw-bolder">100%</span> Guaranteed UpTime </h6>
              <hr />
            </div>
            <a target="_blank" id="link_button-12" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=662&amp;billingcycle=monthly">
              <div className="bg-light m-0 bx-shadow py-3 rounded-15">
                <button className="btn btn-primary text-white fw-bolder w-75 rounded-pill my-2 py-2">
                  Search Domain
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card3
