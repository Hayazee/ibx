import React from 'react'

const Card2 = () => {
  ; (function ($) {
    if (!$) {
      return;
    }
    $(document).ready(function () {
      var $parent = $('.parent-select-price5');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price5[data-target]');
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
          $('#link_button-5').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price6');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price6[data-target]');
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
          $('#link_button-6').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price7');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price7[data-target]');
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
          $('#link_button-7').attr('href', $selected.data('url'));
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
      var $parent = $('.parent-select-price8');
      if (!$parent.length) {
        return;
      }
      var $select = $parent.find('select.select-price8[data-target]');
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
          $('#link_button-8').attr('href', $selected.data('url'));
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
              <h5 className="mb-0 fw-bolder"> Flash Basic </h5>
            </div>
            <div className="bg-blue p-2 px-3 text-light m-0 p-0">
            <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>2<h5 className='m-0 d-inline fw-bolder'> .6 </h5></h3>
              <p className="m-1 fw-bolder"> Monthly </p>
              <p className="m-1 fw-bolder"> *When Ordered Triennally </p>
              <span data-price="plan5" className="text-primary">1 Month $5.02</span>
              <div className="text-center form-group parent-select-price5">
                <select className="m-auto form-control select-price5" data-target="plan5">
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=225&amp;billingcycle=monthly"> 1 Month $5.02 </option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=225&amp;billingcycle=quarterly"> 3 Months $14.04 Save 10% </option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=225&amp;billingcycle=semi-annually"> 6 Months $24.96 Save 20% </option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=225&amp;billingcycle=annually"> 1 Year $37.44 Save 40% </option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=225&amp;billingcycle=biennually"> 2 Years $68.64 Save 45% </option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=225&amp;billingcycle=triennually"> 3 Years $93.06 Save 50% </option>
                </select>
              </div>
              <hr />
              <h6 className="m-0 fw-bolder"> Host 1 Website </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1GB NVMe Storage </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 10GB Bandwidth </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 3 FTP Accounts </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 3 E-mail Accounts</h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1 Databases </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1 Free Domain* </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Free SSL </h6>
              <hr />
              <h6 className="m-0 fw-bolder"><del>99.9%</del> <span className="fw-bolder">100%</span> Guaranteed UpTime</h6>
            </div>
            <a target="_blank" id="link_button-5" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=225&amp;billingcycle=monthly">
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
            <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>3<h5 className='m-0 d-inline fw-bolder'> .54 </h5></h3>
              <p className="m-1 fw-bolder"> Monthly </p>
              <p className="m-1 fw-bolder"> *When Ordered Triennally </p>
              <span data-price="plan6" className="text-primary">1 Month $7.08</span>
              <div className="text-center form-group parent-select-price6">
                <select className="m-auto form-control select-price6" data-target="plan6">
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=226&amp;billingcycle=monthly">1 Month $7.08</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=226&amp;billingcycle=quarterly">3 Months $19.11 Save 10%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=226&amp;billingcycle=semi-annually">6 Months $33.98 Save 20%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=226&amp;billingcycle=annually">1 Year $50.97 Save 40%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=226&amp;billingcycle=biennually">2 Years $93.45 Save 45%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=226&amp;billingcycle=triennually">3 Years $127.44 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 className="m-0 fw-bolder"> Host 1 Website </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 3GB NVMe Storage </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 20GB Bandwidth </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 5 FTP Accounts </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 5 E-mail Accounts </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 3 Databases </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1 Free Domain* </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Free SSL </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> <del>99.9%</del> <span className="fw-bolder">100%</span> Guaranteed UpTime </h6>
            </div>
            <a target="_blank" id="link_button-6" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=226&amp;billingcycle=monthly">
              <div className="bg-light m-0 bx-shadow py-3 rounded-15">
                <button className="btn btn-primary text-white fw-bolder w-75 rounded-pill my-2 py-2">
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
            <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>5<h5 className='m-0 d-inline fw-bolder'> .535 </h5></h3>
              <p className="m-1 fw-bolder"> Monthly </p>
              <p className="m-1 fw-bolder"> *When Ordered Triennally </p>
              <span data-price="plan7" className="text-primary">1 Month $11.07</span>
              <div className="text-center form-group parent-select-price7">
                <select className="m-auto form-control select-price7" data-target="plan7">
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=227&amp;billingcycle=monthly">1 Month $11.07</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=227&amp;billingcycle=quarterly">3 Months $29.88 Save 10%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=227&amp;billingcycle=semi-annually">6 Months $53.13 Save 20%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=227&amp;billingcycle=annually">1 Year $79.70 Save 40%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=227&amp;billingcycle=biennually">2 Years $146.12 Save 45%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=227&amp;billingcycle=triennually">3 Years $199.26 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 className="m-0 fw-bolder"> Host 3 Websites </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 10GB NVMe Storage </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 30GB Bandwidth </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 10 FTP Accounts </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 10 E-mail Accounts </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 10 Databases </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 1 Free Domain* </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> Free SSL </h6>
              <hr />
              <h6 className="m-0 fw-bolder"><del>99.9%</del> <span className="fw-bolder">100%</span> Guaranteed UpTime</h6>
            </div>
            <a target="_blank" id="link_button-7" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=227&amp;billingcycle=monthly">
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
            <h3 className="display-6 fw-bolder d-inline m-0"> <sup> <i className="fas fa-dollar-sign fw-lighter"></i> </sup>9<h5 className='m-0 d-inline fw-bolder'> .01 </h5></h3>
              <p className="m-1 fw-bolder"> Monthly </p>
              <p className="m-1 fw-bolder"> *When Ordered Triennally </p>
              <span data-price="plan8" className="text-primary">1 Month $18.02</span>
              <div className="text-center form-group parent-select-price8">
                <select className="m-auto form-control select-price8" data-target="plan8">
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=314&amp;billingcycle=monthly">1 Month $18.02</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=314&amp;billingcycle=quarterly">3 Months $48.65 Save 10%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=314&amp;billingcycle=semi-annually">6 Months $86.49 Save 20%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=314&amp;billingcycle=annually">1 Year $129.74 Save 40%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=314&amp;billingcycle=biennually">2 Years $237.86 Save 45%</option>
                  <option className="cycle" data-url="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=314&amp;billingcycle=triennually">3 Years $324.36 Save 50%</option>
                </select>
              </div>
              <hr />
              <h6 className="m-0 fw-bolder"> Host 20 Websites </h6>
              <hr />
              <h6 className="m-0 fw-bolder"> 20GB NVMe Storage </h6>
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
              <h6 className="m-0 fw-bolder"> Unlimited Free SSL </h6>
              <hr />
              <h6 className="m-0 fw-bolder"><del>99.9%</del> <span className="fw-bolder">100%</span> Guaranteed UpTime</h6>
            </div>
            <a target="_blank" id="link_button-8" className="ct-link-button" href="https://ibxwebhosting.com/clientarea/cart.php?a=add&amp;pid=314&amp;billingcycle=monthly">
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

export default Card2
