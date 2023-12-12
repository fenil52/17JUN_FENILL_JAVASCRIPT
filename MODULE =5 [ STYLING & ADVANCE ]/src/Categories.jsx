import React from 'react'

const Categories = () => {
  return (
    <>
      <div className='container-fluid'>
         <div className="text-group p-md-5 d-flex align-items-center justify-content-evenly w-50">
            <p className='fs-4 fw-bold'>Featured Categories</p>
            <p className='m-2'>Coke & Mix</p>
            <p className=''>Coffes & Teas</p>
            <p className='text-success'>Pet Foods</p>
            <p className=''>Vegetables</p>
         </div>

         {/* =========== ROW PART ===========*/}

         <div className=" ps-md-5 pe-md-5 gap-3 gap-md-4 over ">

         <div className="col-md-2 col-10 bg-first py-5 pb-md-3 rounded-5  text-center">
               <img src="images/logo.png" alt="" className='img-card'/>
               <p className='py-md-2 mt-3 pb-md-0 fw-bold fs-5'>Red Apple </p>
               <p>26 Items</p>
            </div>

            <div className="col-md-2 bg-first py-5 pb-md-3 rounded-5 text-center">
               <img src="images/vegetables.png" alt="" className='img-card'/>
               <p className='py-md-2 mt-3 pb-md-0 fw-bold fs-5'>Vegetables </p>
               <p>20 Items</p>
            </div>
            
            
            <div className="col-md-2 bg-first py-5 pb-md-3 rounded-5 text-center">
               <img src="images/raspbery.png" alt="" className='img-card'/>
               <p className='py-md-2 mt-3 pb-md-0 fw-bold fs-5'>Stawberry </p>
               <p>26 Items</p>
            </div>


            <div className="col-md-2 width-lemon bg-first py-5 px- pb-md-3 rounded-5 text-center">
               <img src="images/lemon.png" alt="" className='img-lemon'/>
               <p className='py-md-2 mt-3 pb-md-0 fw-bold fs-5'>Lemon </p>
               <p>26 Items</p>
            </div>


            <div className="col-md-2  bg-first py-5 pb-md-3 rounded-5 text-center">
               <img src="images/watermalon.png" alt="" className='img-card'/>
               <p className='py-md-2 mt-3 pb-md-0 fw-bold fs-5'>Watermalon </p>
               <p>10 Items</p>
            </div>

            <div className="col-md-2 bg-first py-5 pb-md-3 rounded-5 text-center">
               <img src="images/kiwi.png" alt="" className='img-card'/>
               <p className='py-md-2 mt-3 pb-md-0 fw-bold fs-5'>Kiwieeee </p>
               <p>26 Items</p>
            </div>


            <div className="col-md-2 bg-first py-5 pb-md-3 rounded-5 text-center">
               <img src="images/grapes.png" alt="" className='img-card'/>
               <p className='py-md-2 mt-3 pb-md-0 fw-bold fs-5'>Black Pulm</p>
               <p>26 Items</p>
            </div>

            <div className="col-md-2 bg-first py-5 pb-md-3 rounded-5 text-center">
               <img src="images/grapes.png" alt="" className='img-card'/>
               <p className='py-md-2 mt-3 pb-md-0 fw-bold fs-5'>Black Pulm</p>
               <p>26 Items</p>
            </div>

    




        </div> 
      </div>
    </>
  )
}

export default Categories




