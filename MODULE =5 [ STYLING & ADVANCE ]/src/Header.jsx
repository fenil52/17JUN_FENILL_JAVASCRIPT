import React from "react";
import * as mdb from "mdb-ui-kit";

const Header = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row gap-md-0 p-md-3 p-1 align-items-center">
          <div className="flex-md-row col-12 p-2 py-4 d-flex col-md-4 justify-content-around">
            <p>About Us</p>
            <p>My Account</p>
            <p>Watchlist</p>
            <p>Order Tracking</p>
          </div>

          <div className="col-md-4 col-12 py-2  d-flex justify-content-md-center justify-content-around">
            <p className="space">Get Great Device Up To 50% Off </p>
            <a href="#" className="text-success space px-md-2">
              View details.
            </a>
          </div>

          <div className="col-md-4 col-10 d-flex align-items-center">
            <p className="d-none d-md-block">Need Help ? Call Us .</p>
            <a href="#" className="text-success d-none d-md-block">
              1200 900
            </a>

            <div class="dropdown border-end border-2 bor-media pe-md-2 border-dark mx-auto mx-md-0 py-3 py-md-0">
              <button
                class="btn btn-secondary dropdown-toggle m-md-0 p-0 ps-2 pt-2 pe-3 ms-3 ms-md-3 pb-2"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-globe px-2 fs-6"></i> English
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  Spanish
                </a>
                <a class="dropdown-item" href="#">
                  Russian
                </a>
                <a class="dropdown-item" href="#">
                  Turkish
                </a>
              </div>
            </div>

            <div class="dropdown show ms-md-3">
              <a
                class="btn btn-secondary dropdown-toggle fw-bold"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                USD
              </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">
                  DOLLAR
                </a>
                <a class="dropdown-item" href="#">
                  INR
                </a>
                <a class="dropdown-item" href="#">
                  Turkish Lira
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
