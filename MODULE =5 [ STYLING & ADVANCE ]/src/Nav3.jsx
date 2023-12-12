import React from "react";

const Nav3 = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center ps-md-5 pe-md-5 justify-content-between">
          <div className="col-md-2 col-12 d-md-flex align-items-center  gap-md-4 ms-md-1">
            <div class="btn-group ">
              <button
                type="button"
                class="btn-fs  text-capitalize btn btn-success dropdown-toggle"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-atom btn-fs pe-md-2"></i>
                Browse All Categories
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-7 col-12 mx-auto me-auto ms-md-5">
            <ul className="list-unstyled gap-md-4 d-flex justify-content-around align-items-center m-0 p-0 ">
              <li className="d-flex gap-2">
                <i class="fab fa-cotton-bureau text-success fs-4"></i>
                <p>Hot Deals</p>
              </li>
              <li>Home</li>
              <li>About</li>
              <li>Shop</li>
              <li>Vendors</li>
              <li>Mega Menu</li>
              <li>Blogs</li>
              <li>Pages</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="col-md-2 d-flex col-10 align-items-center">
            <i class="fas fa-headphones pe-md-2 fs-1"></i>
            <div className="d-flex flex-column">
              <h3 className="p-0 m-0 text-success fs-4">1900-888</h3>
              <p className="fs-p">24/7 Support Center</p>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Nav3;
