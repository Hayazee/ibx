import React from 'react'

const ResellerCard1 = () => {
  ; (function ($) {
    if (!$) {
      return;
    }
    $(document).ready(function () {
      var $parent = $('.parent-select-price13');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price13[data-target]');
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
  // 2
  ; (function ($) {
    if (!$) {
      return;
    }
    $(document).ready(function () {
      var $parent = $('.parent-select-price13');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price13[data-target]');
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
          $('#link_button-13').attr('href', $selected.data('url'));
        });
      });
    });;

  })(window.jQuery);
  // 3
  ; (function ($) {
    if (!$) {
      return;
    }
    $(document).ready(function () {
      var $parent = $('.parent-select-price14');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price14[data-target]');
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
          $('#link_button-14').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price15');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price15[data-target]');
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
          $('#link_button-15').attr('href', $selected.data('url'));
        });
      });
    });

  })(window.jQuery);
  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div className="bg-grey p-2 m-0  text-light fw-bolder rounded-top">
              <h5 className="mb-0 fw-bolder"> Basic Reseller </h5>
            </div>
            <div className="bg-blue p-2 px-3 text-light m-0 p-0">
              <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>7<h5 className='m-0 d-inline fw-bolder'> .49 </h5></h3>
              <p className="m-1 fw-bolder"> Monthly </p>
              <p className="m-1 fw-bolder"> *When Ordered Triennially </p>
              <span data-price="plan13" className="text-primary">1 Month $ 14.99</span>
              <div className="text-center form-group parent-select-price13">
                <select className="m-auto form-control select-price13" data-target="plan13">
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=96&amp;billingcycle=monthly">1 Month $ 14.99</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=96&amp;billingcycle=quarterly">3 Months $ 40.47 Save 10%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=96&amp;billingcycle=semi-annually">6 Months $ 71.95 Save 20%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=96&amp;billingcycle=annually">1 Year $ 107.92 Save 40%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=96&amp;billingcycle=biennually">2 Years $ 197.86 Save 45%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=96&amp;billingcycle=triennually">3 Years $ 269.82 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 className="m-0 fw-bolder"> Free Domain </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Custom Branding </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Free SSL </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 10 GB Storage Space </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Bandwidth </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited SSH Access </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Discount on .pk domain </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Control panel </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Anonymous Nameservers </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Reseller Account Management </h6>
              <hr />
              <h6 className='fw-bold text-white'> Dedicated Hot Line </h6>
            </div>
            <a target="_blank" id="link_button-12" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=96&amp;billingcycle=monthly">
              <div className="bg-light m-0 bx-shadow py-3 rounded-15">
                <button className="btn btn-primary text-white fw-bolder w-75 rounded-pill my-2 py-2">
                  Search Domain
                </button>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div className="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 className="mb-0 fw-bolder"> Reseller Economy </h5>
            </div>
            <div className="bg-blue p-2 px-3 text-light m-0 p-0">
              <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>9<h5 className='m-0 d-inline fw-bolder'> .74 </h5></h3>
              <p className="m-1 fw-bolder"> Monthly </p>
              <p className="m-1 fw-bolder"> *When Ordered Triennially </p>
              <span data-price="plan13" className="text-primary">1 Month $ 19.48</span>
              <div className="text-center form-group parent-select-price13">
                <select className="m-auto form-control select-price13" data-target="plan13">
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=176&amp;billingcycle=monthly">1 Month $ 19.48 </option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=176&amp;billingcycle=quarterly">3 Months $ 52.59 Save 10%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=176&amp;billingcycle=semi-annually">6 Months $ 93.50 Save 20%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=176&amp;billingcycle=annually">1 Year $ 140.25 Save 40%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=176&amp;billingcycle=biennually">2 Years $ 257.13 Save 45%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=176&amp;billingcycle=triennually">3 Years $ 350.64 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 className="m-0 fw-bolder"> Free Domain </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Custom Branding </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Free SSL </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 20 GB Storage Space </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Bandwidth </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited SSH Access </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Discount on .pk domain </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Control panel </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Anonymous Nameservers </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Reseller Account Management </h6>
              <hr />
              <h6 className='fw-bold text-white'> Dedicated Hot Line </h6>
            </div>
            <a target="_blank" id="link_button-13" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=176&amp;billingcycle=monthly">
              <div className="bg-light m-0 bx-shadow py-3 rounded-15">
                <button className="btn btn-primary text-white fw-bolder w-75 rounded-pill my-2 py-2">
                  Search Domain
                </button>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div className="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 className="mb-0 fw-bolder"> Reseller Deluxe </h5>
            </div>
            <div className="bg-blue p-2 px-3 text-light m-0 p-0">
              <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>12<h5 className='m-0 d-inline fw-bolder'> .66 </h5></h3>
              <p className="m-1 fw-bolder"> Monthly </p>
              <p className="m-1 fw-bolder"> *When Ordered Triennially </p>
              <span data-price="plan14" className="text-primary"></span>
              <div className="text-center form-group parent-select-price14">
                <select className="m-auto form-control select-price14" data-target="plan14">
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=177&amp;billingcycle=monthly">1 Month $ 25.32 </option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=177&amp;billingcycle=quarterly">3 Months $ 68.36 Save 10%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=177&amp;billingcycle=semi-annually">6 Months $ 121.53 Save 20%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=177&amp;billingcycle=annually">1 Year $ 182.30 Save 40%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=177&amp;billingcycle=biennually">2 Years $ 334.22 Save 45%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=177&amp;billingcycle=triennually">3 Years $ 455.76 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 className="m-0 fw-bolder"> Free Domain </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Custom Branding </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Free SSL </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 40 GB Storage Space </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Bandwidth </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited SSH Access </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Discount on .pk domain </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Control panel </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Anonymous Nameservers </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Reseller Account Management </h6>
              <hr />
              <h6 className='fw-bold text-white'> Dedicated Hot Line </h6>
            </div>
            <a target="_blank" id="link_button-14" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=177&amp;billingcycle=monthly">
              <div className="bg-light m-0 bx-shadow py-3 rounded-15">
                <button className="btn btn-primary text-white fw-bolder w-75 rounded-pill my-2 py-2">
                  Search Domain
                </button>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div className="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 className="mb-0 fw-bolder"> Reseller Unlimited </h5>
            </div>
            <div className="bg-blue p-2 px-3 text-light m-0 p-0">
              <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>16<h5 className='m-0 d-inline fw-bolder'> .45 </h5></h3>
              <p className="m-1 fw-bolder"> Monthly </p>
              <p className="m-1 fw-bolder"> *When Ordered Triennially </p>
              <span data-price="plan15" className="text-primary"></span>
              <div className="text-center form-group parent-select-price15">
                <select className="m-auto form-control select-price15" data-target="plan15">
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=316&amp;billingcycle=monthly">1 Month $ 32.91 </option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=316&amp;billingcycle=quarterly">3 Months $ 88.85 Save 10%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=316&amp;billingcycle=semi-annually">6 Months $ 157.96 Save 20%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=316&amp;billingcycle=annually">1 Year $ 236.95 Save 40%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=316&amp;billingcycle=biennually">2 Years $ 434.41 Save 45%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=316&amp;billingcycle=triennually">3 Years $ 592.36 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 className="m-0 fw-bolder"> Free Domain </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Custom Branding </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Free SSL </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 100 GB Storage Space </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Bandwidth </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited SSH Access </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Discount on .pk domain </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> cWatch Website Security - Basic </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Control panel </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Reseller Account Management </h6>
              <hr />
              <h6 className='fw-bold text-white'> Dedicated Hot Line </h6>
            </div>
            <a target="_blank" id="link_button-15" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=316&amp;billingcycle=monthly">
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

export default ResellerCard1
