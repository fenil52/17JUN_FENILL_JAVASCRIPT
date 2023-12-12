import React from "react";

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-mdb-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselExampleIndicators"
            data-mdb-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleIndicators"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleIndicators"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="images/slider-1.jpg"
              class="d-block slide-img position-main"
              alt="Wild Landscape"
            />

            <div className="position-div">
              <h1 className="py-md-3 pb-md-2 pos-h1">
                Don't Miss Amazing Grocery Deals
              </h1>
              <p className="py-md-4 pt-md-0 pos-p">
                Signup For The Daily Newsletter 🍲
              </p>

              <div class="input-group mb-3 width  radious mt-md-4">
                <p class="far fa-chess-queen mt-auto mb-auto ps-0 ms-md-4 fs-4"></p>
                <input
                  type="text"
                  class="form-control rounded-5 border-0 bg-transparent m-auto ps-md-4"
                  placeholder="Your Email Address"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn bg-success btn-radious border-0 padding"
                  type="button"
                  id="button-addon2"
                  data-mdb-ripple-color="dark"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="images/slider-2.jpg"
              class="d-block slide-img position-main"
              alt="Camera"
            />
            <div className="position-div">
              <h1 className="py-md-3 pb-md-2 pos-h1">
                Don't Miss Amazing Grocery Deals
              </h1>
              <p className="py-md-4 pt-md-0 pos-p">
                Signup For The Daily Newsletter 🍲
              </p>

              <div class="input-group mb-3 width radious mt-md-4">
                <p class="far fa-chess-queen mt-auto mb-auto ps-0 ms-md-4 fs-4"></p>
                <input
                  type="text"
                  class="form-control rounded-5 border-0 bg-transparent m-auto ps-md-4"
                  placeholder="Your Email Address"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn bg-success btn-radious border-0 padding"
                  type="button"
                  id="button-addon2"
                  data-mdb-ripple-color="dark"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>


          <div class="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
              class="d-block w-100 position-main"
              alt="Exotic Fruits"
            />

        <div className="position-div">
              <h1 className="py-md-3 pb-md-2 pos-h1">
                Don't Miss Amazing Grocery Deals
              </h1>
              <p className="py-md-4 pt-md-0 pos-p">
                Signup For The Daily Newsletter 🍲
              </p>

              <div class="input-group mb-3 width radious mt-md-4">
                <p class="far fa-chess-queen mt-auto mb-auto ps-0 ms-md-4 fs-4"></p>
                <input
                  type="text"
                  class="form-control rounded-5 border-0 bg-transparent m-auto ps-md-4"
                  placeholder="Your Email Address"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn bg-success btn-radious border-0 padding"
                  type="button"
                  id="button-addon2"
                  data-mdb-ripple-color="dark"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselExampleIndicators"
          data-mdb-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-mdb-target="#carouselExampleIndicators"
          data-mdb-slide="next"
        >
          <span class="carousel-control-next-icon " aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Home;
