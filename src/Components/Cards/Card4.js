import React from 'react'

const Card4 = () => {
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
    });

  })(window.jQuery);
  // 2
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
  // 3
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
  // 4
  ; (function ($) {
    if (!$) {
      return;
    }
    $(document).ready(function () {
      var $parent = $('.parent-select-price16');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price16[data-target]');
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
          $('#link_button-16').attr('href', $selected.data('url'));
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
              <h5 className="mb-0 fw-bolder"> VPS Basic </h5>
            </div>
            <div className="bg-blue p-2 px-3 text-light m-0 p-0">
            <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>11<h5 className='m-0 d-inline fw-bolder'> .71 </h5></h3>
              <p className="m-1 fw-bolder"> Monthly </p>
              <p className="m-1 fw-bolder"> *When Ordered Triennally </p>
              <span data-price="plan13" className="text-primary">1 Month $ 23.42</span>
              <div className="text-center form-group parent-select-price13">
                <select className="m-auto form-control select-price13" data-target="plan13">
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=309&amp;billingcycle=monthly">1 Month $ 23.42</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=309&amp;billingcycle=quarterly">3 Months $ 63.23 Save 10%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=309&amp;billingcycle=semi-annually">6 Months $ 112.41 Save 20%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=309&amp;billingcycle=annually">1 Year $ 168.62 Save 40%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=309&amp;billingcycle=biennually">2 Years $ 309.14 Save 45%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=309&amp;billingcycle=triennually">3 Years $ 421.56 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 className="m-0 fw-bolder"> 1GB RAM </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> CPU 100% </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1 Free Domain* </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1GB Internet Port </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 200GB Bandwidth </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Free SSL </h6>
              <hr />
              <h6 className="m-0 fw-bolder">50GB Storage Space</h6>
              <hr />
              <h6 className="m-0 fw-bolder">Unlimited Database</h6>
              <hr />
              <h6 className="m-0 fw-bolder">Host Unlimited Website</h6>
              <hr />
              <h6 className="m-0 fw-bolder">Unlimited Control Panel</h6>
              <hr />
              <h6 className="m-0 fw-bolder">Unlimited E-mail Accounts</h6>
              <hr />
              <h6 className="m-0 fw-bolder">Reseller Account Management</h6>
              <hr />
              <h6 className="m-0 fw-bolder"> <del> 99.9% </del> <span className="fw-bolder">100%</span> Guaranted UpTime </h6>
            </div>
            <a target="_blank" id="link_button-13" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=313&amp;billingcycle=monthly">
              <div className="bg-light m-0 bx-shadow py-3 rounded-15"><button className="btn btn-primary text-white fw-bolder w-75 rounded-pill my-2 py-2">
                Search Domain
              </button>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div className="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 className="mb-0 fw-bolder"> VPS Economy </h5>
            </div>
            <div className="bg-blue p-2 px-3 text-light m-0 p-0">
            <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>15<h5 className='m-0 d-inline fw-bolder'> .22 </h5></h3>
              <p className="m-1 fw-bolder"> Monthly </p>
              <p className="m-1 fw-bolder"> *When Ordered Triennally </p>
              <span data-price="plan14" className="text-primary">1 Month $ 30.44</span>
              <div className="text-center form-group parent-select-price14">
                <select className="m-auto form-control select-price14" data-target="plan14">
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=311&amp;billingcycle=monthly">1 Month $ 30.44</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=311&amp;billingcycle=quarterly">3 Months $ 82.18 Save 10%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=311&amp;billingcycle=semi-annually">6 Months $ 146.11 Save 20%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=311&amp;billingcycle=annually">1 Year $ 219.16 Save 40%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=311&amp;billingcycle=biennually">2 Years $ 401.80 Save 45%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=311&amp;billingcycle=triennually">3 Years $ 547.92 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 className="m-0 fw-bolder"> 3GB RAM </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> CPU 100% </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1 Free Domain* </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1GB Internet Port </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 400GB Bandwidth </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Free SSL </h6>
              <hr />
              <h6 className="m-0 fw-bolder">70GB Storage Space</h6>
              <hr />
              <h6 className="m-0 fw-bolder">Unlimited Database</h6>
              <hr />
              <h6 className="m-0 fw-bolder">Host Unlimited Website</h6>
              <hr />
              <h6 className="m-0 fw-bolder">Unlimited Control Panel</h6>
              <hr />
              <h6 className="m-0 fw-bolder">Unlimited E-mail Accounts</h6>
              <hr />
              <h6 className="m-0 fw-bolder">Reseller Account Management</h6>
              <hr />
              <h6 className="m-0 fw-bolder"> <del> 99.9% </del> <span className="fw-bolder">100%</span> Guaranted UpTime </h6>
            </div>
            <a target="_blank" id="link_button-14" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=311&amp;billingcycle=monthly">
              <div className="bg-light m-0 bx-shadow py-3 rounded-15">
                <button className="btn btn-primary text-white fw-bolder w-75 rounded-pill my-2 py-2">
                  Search Domain
                </button>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div className="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 className="mb-0 fw-bolder"> VPS Deluxe </h5>
            </div>
            <div className="bg-blue p-2 px-3 text-light m-0 p-0">
            <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>19<h5 className='m-0 d-inline fw-bolder'> .78 </h5></h3>
              <p className="m-1 fw-bolder"> Monthly </p>
              <p className="m-1 fw-bolder"> *When Ordered Triennally </p>
              <span data-price="plan15" className="text-primary">1 Month $ 39.57</span>
              <div className="text-center form-group parent-select-price15">
                <select className="m-auto form-control select-price15" data-target="plan15">
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=312&amp;billingcycle=monthly">1 Month $ 39.57</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=312&amp;billingcycle=quarterly">3 Months $ 106.83 Save 10%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=312&amp;billingcycle=semi-annually">6 Months $ 189.93 Save 20%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=312&amp;billingcycle=annually">1 Year $ 284.90 Save 40%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=312&amp;billingcycle=biennually">2 Years $ 522.32 Save 45%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=312&amp;billingcycle=triennually">3 Years $ 712.26 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 className="m-0 fw-bolder"> 8GB RAM </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> CPU 300% </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1 Free Domain* </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1GB Internet Port </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 800GB Bandwidth </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Free SSL </h6>
              <hr />
              <h6 className="m-0 fw-bolder">200GB Storage Space</h6>
              <hr />
              <h6 className="m-0 fw-bolder">Unlimited Database</h6>
              <hr />
              <h6 className="m-0 fw-bolder">Host Unlimited Website</h6>
              <hr />
              <h6 className="m-0 fw-bolder">Unlimited Control Panel</h6>
              <hr />
              <h6 className="m-0 fw-bolder">Unlimited E-mail Accounts</h6>
              <hr />
              <h6 className="m-0 fw-bolder">Reseller Account Management</h6>
              <hr />
              <h6 className="m-0 fw-bolder"> <del> 99.9% </del> <span className="fw-bolder">100%</span> Guaranted UpTime </h6>
            </div>
            <a target="_blank" id="link_button-15" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=312&amp;billingcycle=monthly">
              <div className="bg-light m-0 bx-shadow py-3 rounded-15">
                <button className="btn btn-primary text-white fw-bolder w-75 rounded-pill my-2 py-2">
                  Search Domain
                </button>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-3 move-up">
            <div className="bg-grey p-2 m-0 rounded-top text-light fw-bolder">
              <h5 className="mb-0 fw-bolder"> VPS Unlimited </h5></div>
            <div className="bg-blue p-2 px-3 text-light m-0 p-0">
            <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>34<h5 className='m-0 d-inline fw-bolder'> .63 </h5></h3>
              <p className="m-1 fw-bolder"> Monthly </p>
              <p className="m-1 fw-bolder"> *When Ordered Triennally </p>
              <span data-price="plan16" className="text-primary">1 Month $ 69.26</span>
              <div className="text-center form-group parent-select-price16">
                <select className="m-auto form-control select-price16" data-target="plan16">
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=313&amp;billingcycle=monthly">1 Month $ 69.26</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=313&amp;billingcycle=quarterly">3 Months $ 187.00 Save 10%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=313&amp;billingcycle=semi-annually">6 Months $ 332.44 Save 20%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=313&amp;billingcycle=annually">1 Year $ 498.67 Save 40%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=313&amp;billingcycle=biennually">2 Years $ 914.43 Save 45%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=313&amp;billingcycle=triennually">3 Years $ 1246.68 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 className="m-0 fw-bolder"> 16GB RAM </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> CPU 400% </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1 Free Domain* </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1GB Internet Port </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1.6TB Bandwidth </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Unlimited Free SSL </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 400GB Storage Space</h6>
              <hr />
              <h6 className="m-0 fw-bolder">Unlimited Database</h6>
              <hr />
              <h6 className="m-0 fw-bolder">Host Unlimited Website</h6>
              <hr />
              <h6 className="m-0 fw-bolder">Unlimited Control Panel</h6>
              <hr />
              <h6 className="m-0 fw-bolder">Unlimited E-mail Accounts</h6>
              <hr />
              <h6 className="m-0 fw-bolder">Reseller Account Management</h6>
              <hr />
              <h6 className="m-0 fw-bolder"> <del> 99.9% </del> <span className="fw-bolder">100%</span> Guaranted UpTime </h6>
            </div>
            <a target="_blank" id="link_button-16" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=313&amp;billingcycle=monthly">
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

export default Card4
