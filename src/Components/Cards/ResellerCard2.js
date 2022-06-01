import React from 'react'

const ResellerCard2 = () => {
  ; (function ($) {
    if (!$) {
      return;
    }
    $(document).ready(function () {
      var $parent = $('.parent-select-price17');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price17[data-target]');
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
          $('#link_button-17').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price18');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price18[data-target]');
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
          $('#link_button-18').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price19');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price19[data-target]');
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
          $('#link_button-19').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price20');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price20[data-target]');
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
          $('#link_button-20').attr('href', $selected.data('url'));
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
              <h5 className="mb-0 fw-bolder"> Flash Basic </h5>
            </div>
            <div className="bg-blue p-2 px-3 text-light m-0 p-0">
            <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>9<h5 className='m-0 d-inline fw-bolder'> .74 </h5></h3>
              <p className="m-1 fw-bolder"> Monthly </p>
              <p className="m-1 fw-bolder"> *When Ordered Triennially </p>
              <span data-price="plan17" className="text-primary">1 Month $ 19.48</span>
              <div className="text-center form-group parent-select-price17">
                <select className="m-auto form-control select-price17" data-target="plan17">
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=319&amp;billingcycle=monthly">1 Month $ 19.48 </option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=319&amp;billingcycle=quarterly">3 Months $ 52.59 Save 10%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=319&amp;billingcycle=semi-annually">6 Months $ 93.50 Save 20%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=319&amp;billingcycle=annually">1 Year $ 140.25 Save 40%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=319&amp;billingcycle=biennually">2 Years $ 257.13 Save 45%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=319&amp;billingcycle=triennually">3 Years $ 350.64 Save 50%</option>
                </select>
              </div>
              <hr />

              <h6 className="m-0 fw-bolder"> Free Domain </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Custom Branding </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Free SSL </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Bandwidth </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Discount on .pk domain </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Control panel </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Anonymous Nameservers </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Reseller Account Management </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 10 GB NVMe High Speed Storage </h6>
              <hr />
              <h6 className='fw-bold text-white'> Dedicated Hot Line </h6>
            </div>
            <a id="link_button-17" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=319&amp;billingcycle=monthly">
              <div className="bg-light m-0 bx-shadow py-3 rounded-15">
                <button className="btn btn-primary text-white fw-bolder w-75 rounded-pill my-2 py-2">
                  Search Domain
                </button>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div className="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 className="mb-0 fw-bolder"> Flash Economy </h5>
            </div>
            <div className="bg-blue p-2 px-3 text-light m-0 p-0">
            <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>12<h5 className='m-0 d-inline fw-bolder'> .66 </h5></h3>
              <p className="m-1 fw-bolder"> Monthly </p>
              <p className="m-1 fw-bolder"> *When Ordered Triennially </p>
              <span data-price="plan18" className="text-primary">1 Month $ 25.32</span>
              <div className="text-center form-group parent-select-price18">
                <select className="m-auto form-control select-price18" data-target="plan18">
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=320&amp;billingcycle=monthly">1 Month $ 25.32 </option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=320&amp;billingcycle=quarterly">3 Months $ 68.36 Save 10%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=320&amp;billingcycle=semi-annually">6 Months $ 121.53 Save 20%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=320&amp;billingcycle=annually">1 Year $ 182.30 Save 40%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=320&amp;billingcycle=biennually">2 Years $ 334.22 Save 45%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=320&amp;billingcycle=triennually">3 Years $ 455.76 Save 50%</option>
                </select>
              </div>
              <hr /><h6 className="m-0 fw-bolder"> Free Domain </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Custom Branding </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Free SSL </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Bandwidth </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Discount on .pk domain </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Control panel </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Anonymous Nameservers </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Reseller Account Management </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 20 GB NVMe High Speed Storage </h6>
              <hr />
              <h6 className='fw-bold text-white'> Dedicated Hot Line </h6>
            </div>
            <a id="link_button-18" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=320&amp;billingcycle=monthly">
              <div className="bg-light m-0 bx-shadow py-3 rounded-15"><button className="btn btn-primary text-white fw-bolder w-75 rounded-pill my-2 py-2">
                Search Domain
              </button>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div className="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 className="mb-0 fw-bolder"> Flash Deluxe </h5>
            </div>
            <div className="bg-blue p-2 px-3 text-light m-0 p-0">
            <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>16<h5 className='m-0 d-inline fw-bolder'> .45 </h5></h3>
              <p className="m-1 fw-bolder"> Monthly </p>
              <p className="m-1 fw-bolder"> *When Ordered Triennially </p>
              <span data-price="plan19" className="text-primary">1 Month $ 32.91</span>
              <div className="text-center form-group parent-select-price19">
                <select className="m-auto form-control select-price19" data-target="plan19">
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=318&amp;billingcycle=monthly">1 Month $ 32.91 </option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=318&amp;billingcycle=quarterly">3 Months $ 88.85 Save 10%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=318&amp;billingcycle=semi-annually">6 Months $ 157.96 Save 20%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=318&amp;billingcycle=annually">1 Year $ 236.95 Save 40%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=318&amp;billingcycle=biennually">2 Years $ 434.41 Save 45%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=318&amp;billingcycle=triennually">3 Years $ 592.36 Save 50%</option>
                </select>
              </div>
              <hr />

              <h6 className="m-0 fw-bolder"> Free Domain </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Custom Branding </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Free SSL </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Bandwidth </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Discount on .pk domain </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Control panel </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Anonymous Nameservers </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Reseller Account Management </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 40 GB NVMe High Speed Storage </h6>
              <hr />
              <h6 className='fw-bold text-white'> Dedicated Hot Line </h6>
            </div>
            <a id="link_button-19" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=318&amp;billingcycle=monthly">
              <div className="bg-light m-0 bx-shadow py-3 rounded-15">
                <button className="btn btn-primary text-white fw-bolder w-75 rounded-pill my-2 py-2">
                  Search Domain
                </button>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div className="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 className="mb-0 fw-bolder"> Flash Unlimited </h5>
            </div>
            <div className="bg-blue p-2 px-3 text-light m-0 p-0">
            <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>21<h5 className='m-0 d-inline fw-bolder'> .39 </h5></h3>
              <p className="m-1 fw-bolder"> Monthly </p>
              <p className="m-1 fw-bolder"> *When Ordered Triennially </p>
              <span data-price="plan20" className="text-primary">1 Month $ 42.78</span>
              <div className="text-center form-group parent-select-price20">
                <select className="m-auto form-control select-price20" data-target="plan20">
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=321&amp;billingcycle=monthly">1 Month $ 42.78 </option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=321&amp;billingcycle=quarterly">3 Months $ 115.51 Save 10%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=321&amp;billingcycle=semi-annually">6 Months $ 205.35 Save 20%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=321&amp;billingcycle=annually">1 Year $ 308.03 Save 40%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=321&amp;billingcycle=biennually">2 Years $ 564.73 Save 45%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=321&amp;billingcycle=triennually">3 Years $ 770.09 Save 50%</option>
                </select>
              </div>
              <hr />

              <h6 className="m-0 fw-bolder"> Free Domain </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Custom Branding </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Free SSL </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Bandwidth </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Discount on .pk domain </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Control panel </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Anonymous Nameservers </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Reseller Account Management </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 100 GB NVMe High Speed Storage </h6>
              <hr />
              <h6 className='fw-bold text-white'> Dedicated Hot Line </h6>
            </div>
            <a id="link_button-20" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=321&amp;billingcycle=monthly">
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

export default ResellerCard2
