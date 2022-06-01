import React from 'react'

const Card1 = () => {
  ; (function ($) {
    if (!$) {
      return;
    }
    $(document).ready(function () {
      var $parent = $('.parent-select-price1');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price1[data-target]');
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
          $('#link_button-1').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price2');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price2[data-target]');
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
          $('#link_button-2').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price3');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price3[data-target]');
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
          $('#link_button-3').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price4');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price4[data-target]');
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
          $('#link_button-4').attr('href', $selected.data('url'));
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
              <h5 className="mb-0 fw-bolder"> SSD Basic </h5>
            </div>
            <div className="bg-blue p-2 px-3 text-light m-0 p-0">
              <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>2<h5 className='m-0 d-inline fw-bolder'> .00 </h5></h3>
              <p className="m-1 fw-bolder"> Monthly </p>
              <p className="m-1 fw-bolder"> *When Ordered Triennally </p>
              <span data-price="plan1" className="text-primary">1 Month $4.00</span>
              <div className="form-group parent-select-price1 text-center">
                <select className="m-auto form-control select-price1" data-target="plan1">
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=monthly"> 1 Month $4.00 </option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=quarterly"> 3 Months $10.08 Save 10% </option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=semi-annually"> 6 Months $19.02 Save 20% </option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=annually"> 1 Year $28.08 Save 40% </option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=biennually"> 2 Years $52.08 Save 45% </option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=triennually"> 3 Years $72.00 Save 50% </option>
                </select>
              </div>
              <hr />
              <h6 className="m-0 fw-bolder"> Host 1 Website </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1GB Storage Space </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 10GB Bandwidth </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 5 FTP Accounts </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 5 E-mail Accounts </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1 Database </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1 Free Domain* </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Free SSL </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> CloudFlare </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> CWatch Website Security - Basic </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> <del> 99.9% </del> <span className="fw-bolder"> 100% </span> Guaranted UpTime </h6>
            </div>
            <a target="_blank" id="link_button-1" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=92&amp;billingcycle=monthly">
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
            <div className="bg-blue p-2 px-3 text-light m-0 p-0">
              <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>3<h5 className='m-0 d-inline fw-bolder'> .00 </h5></h3>
              <p className="m-1 fw-bolder"> Monthly </p>
              <p className="m-1 fw-bolder"> *When Ordered Triennally </p>
              <span data-price="plan2" className="text-primary">1 Month $6.00</span>
              <div className="form-group parent-select-price2">
                <select className="m-auto form-control select-price2" data-target="plan2">
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=monthly"> 1 Month $6.00 </option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=quarterly">3 Months $16.02 Save 10%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=semi-annually">6 Months $28.08 Save 20%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=annually">1 Year $43.02 Save 40%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=biennually">2 Years $79.02 Save 45%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=triennually">3 Years $108.00 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 className="m-0 fw-bolder"> Host 2 Websites </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 5GB Storage Space </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 30 GB Bandwidth </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 10 FTP Accounts </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 10 E-mail Accounts </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 5 Databases </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1 Free Domain* </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> CloudFlare </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> CWatch Website Security - Basic </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Free SSL </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> <del>99.9%</del> <span className="fw-bolder">100%</span> Guaranteed UpTime</h6>
            </div>
            <a target="_blank" id="link_button-2" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=2&amp;billingcycle=monthly"><div className="bg-light m-0 bx-shadow py-3 rounded-15">
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
            <div className="bg-blue p-2 px-3 text-light m-0 p-0">
              <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>4<h5 className='m-0 d-inline fw-bolder'> .5 </h5></h3>
              <p className="m-1 fw-bolder"> Monthly </p>
              <p className="m-1 fw-bolder"> *When Ordered Triennally </p>
              <span data-price="plan3" className="text-primary">1 Month $9.00</span>
              <div className="form-group parent-select-price3">
                <select className="m-auto form-control select-price3" data-target="plan3">
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=monthly">1 Month $9.00</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=quarterly">3 Months $24.03 Save 10%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=semi-annually">6 Months $43.02 Save 20%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=annually">1 Year $64.08 Save 40%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=biennually">2 Years $118.08 Save 45%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=triennually"> 3 Years $162.00 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 className="m-0 fw-bolder"> Host 5 Websites </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 15GB Storage Space </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 50GB Bandwidth </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 30 FTP Accounts </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 30 E-mail Accounts </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 15 Databases </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1 Free Domain* </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Cloudflare </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> CWatch Website Security - Basic </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Free SSL </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> <del>99.9%</del> <span className="fw-bolder">100%</span> Guaranteed UpTime </h6>
              <hr />
            </div>
            <a target="_blank" id="link_button-3" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=97&amp;billingcycle=monthly">
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
            <div className="bg-blue p-2 px-3 text-light m-0 p-0">
              <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>7<h5 className='m-0 d-inline fw-bolder'> .00 </h5></h3>
              <p className="m-1 fw-bolder"> Monthly </p>
              <p className="m-1 fw-bolder"> *When Ordered Triennally </p>
              <span data-price="plan4" className="text-primary">1 Month $14.00</span>
              <div className="form-group parent-select-price4">
                <select className="m-auto form-control select-price4" data-target="plan4">
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=monthly"> 1 Month $14.00</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=quarterly"> 3 Months $37.08 Save 10%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=semi-annually"> 6 Months $67.02 Save 20%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=annually"> 1 Year $100.08 Save 40%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=biennually"> 2 Years $184.08 Save 45%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=triennually"> 3 Years $252.00 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 className="m-0 fw-bolder"> Host 10 Websites </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 30GB Storage Space </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Bandwidth </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited FTP Accounts </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited E-mail Accounts </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Databases </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1 Free Domain* </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Cloudflare </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> CloudFlare </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Free SSL* </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> <del>99.9%</del> <span className="fw-bolder">100%</span> Guaranteed UpTime </h6>
              <hr />
            </div>
            <a target="_blank" id="link_button-4" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=310&amp;billingcycle=monthly">
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

export default Card1
