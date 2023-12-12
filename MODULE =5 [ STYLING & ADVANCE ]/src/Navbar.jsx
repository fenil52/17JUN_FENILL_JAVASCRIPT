import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center ps-md-5 pe-md-5">
          <div className="col-md-2 d-flex col-10">
            <img src="images/logo.png" alt="image" className="pe-md-2 fruit" />
            <div className="d-flex flex-column">
              <h3 className="p-0 m-0 text-success">Nest</h3>
              <p>Fruits & nuts</p>
            </div>
          </div>

          <div className="col-md-4 col-10 mx-auto">
            <div class="input-group rounded align-items-center px-md-4  border">
              <p className="m-0 pe-md-4 fw-bolder">All Categories</p>

              <input
                type="search"
                class="form-control border-0"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <i class="fas fa-search fs-5 text-black-50 ps-md-2"></i>
            </div>
          </div>

          <div className="col-md-6 col-12 justify-content-md-around justify-content-around d-flex">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-mdb-toggle="dropdown"
              data-mdb-auto-close="true"
              aria-expanded="false"
            >
              Your Location{" "}
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Rajkot
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Ahmedabad
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Jaipur..
                </a>
              </li>
            </ul>

            <div className="d-flex flex-row align-items-center">
              <a href="">
                <i class="fas fa-spinner fs-4 text-dark "></i>
                <span class="badge rounded-pill badge-notification bg-success text-white">
                  1
                </span>
              </a>
              <p className="ps-md-3 ps-2">Compare</p>
            </div>

            <div className="d-flex flex-row align-items-center">
              <a href="">
                <i class="far fa-heart fs-3 text-dark "></i>
                <span class="badge rounded-pill badge-notification bg-success text-white">
                  5
                </span>
              </a>
              <p className="ps-md-3 ps-2">WishList</p>
            </div>

            <div className="d-flex flex-row align-items-center">
              <a href="">
                <i class="fab fa-opencart fs-2 text-dark "></i>
                <span class="badge rounded-pill badge-notification bg-success text-white">
                  5
                </span>
              </a>
              <p className="ps-md-3 ps-3">Cart</p>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-between">
              <a href="">
                <i class="far fa-circle-user fs-2 text-dark"></i>
              </a>
              <p className="ps-md-2 ps-2">Account</p>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Navbar;
