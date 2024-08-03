import React, { useState , useEffect} from 'react'

export default function Footer() {
  return (
    <>
    <div className="info text-light  text-center py-5">
      <div className="container">
        <div className="row py-3">
          <div className="col-md-4 location">
            <p className='text'>LOCATION</p>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4 web">
            <p className='text'>AROUND THE WEB</p>
            <p>
              <i className="fa-brands fa-facebook mx-2"></i>
              <i className="fa-brands fa-twitter mx-2"></i>
              <i className="fa-brands fa-linkedin-in mx-2"></i>
              <i className="fa-solid fa-globe mx-2"></i>
            </p>
          </div>
          <div className="col-md-4 freelancer">
            <p className='text'>ABOUT FREELANCER</p>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
    </div>

    <div className="footer m-0">
      <div className="text-center text-white p-3">Copyright &copy; Your Website 2021</div>
    </div>
    </>
  )
}
