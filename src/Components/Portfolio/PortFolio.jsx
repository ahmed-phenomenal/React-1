import React, { useState , useEffect} from 'react'
import portfolio1 from '../../IMG/portfolio/poert1.png'
import portfolio2 from '../../IMG/portfolio/port2.png'
import portfolio3 from '../../IMG/portfolio/port3.png'
export default function PortFolio() {
  const [title, setTitle] = useState('PortFolio'); // Initialize state with "portfolio"

  // Use useEffect to update the document title when the component mounts
  useEffect(() => {
    document.title = title; // Set the document title to the value of title state
  }, [title]); // Dependency array with title, so it updates when title changes

  return (
    <>

      <div className="portfolio py-3">
        <div className="container">
          <div className="content">
          <h2 className='text-uppercase my-3'>portfolio component</h2>
          <div className="star-with-lines">
            <div className="line"></div>
            <i className="fas fa-star star-icon"></i>
            <div className="line"></div>
          </div>
            <div className="row g-5 my-3">
              <div className="col-lg-4 my-3 position-relative col-md-6 col-sm-12">
                <img src={portfolio1} className="thumbnail" />
                <div className="caption text-center">
                  <h2 className='text-light'><i class="fa-solid fa-plus"></i></h2>
                </div>
              </div>
              <div className="col-lg-4 my-3 position-relative col-md-6 col-sm-12">
                <img src={portfolio2} className="thumbnail" />
                <div className="caption text-center">
                  <h2 className='text-light'><i class="fa-solid fa-plus"></i></h2>
                </div>
              </div>
              <div className="col-lg-4 my-3 position-relative col-md-6 col-sm-12">
                <img src={portfolio3} className="thumbnail" />
                <div className="caption text-center">
                  <h2 className='text-light'><i class="fa-solid fa-plus"></i></h2>
                </div>
              </div>
              <div className="col-lg-4 my-3 position-relative col-md-6 col-sm-12">
                <img src={portfolio1} className="thumbnail" />
                <div className="caption text-center">
                  <h2 className='text-light'><i class="fa-solid fa-plus"></i></h2>
                </div>
              </div>
              <div className="col-lg-4 my-3 position-relative col-md-6 col-sm-12">
                <img src={portfolio2} className="thumbnail" />
                <div className="caption text-center">
                  <h2 className='text-light'><i class="fa-solid fa-plus"></i></h2>
                </div>
              </div>
              <div className="col-lg-4 my-3 position-relative col-md-6 col-sm-12">
                <img src={portfolio3} className="thumbnail" />
                <div className="caption text-center">
                  <h2 className='text-light'><i class="fa-solid fa-plus"></i></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
