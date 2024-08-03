import React, { useState , useEffect} from 'react'
import img from '../../IMG/home/avataaars.png'




export default function Home() {
  const [title, setTitle] = useState('Home'); // Initialize state with "about"

  // Use useEffect to update the document title when the component mounts
  useEffect(() => {
    document.title = title; // Set the document title to the value of title state
  }, [title]); // Dependency array with title, so it updates when title changes

    return (
    <>

      <div className="home">
      <div className="container">
        <div className="content">
          <img src={img} alt='img'/>
          <h2 className='text-uppercase text-white my-3'>start Framework</h2>
          <div className="star-with-lines">
            <div className="line"></div>
            <i className="fas fa-star star-icon"></i>
            <div className="line"></div>
          </div>
          <p className='my-3 text-light'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </div>

    </>
  )
  /*Home
<div className="home">
      <div className="container">
        <div className="content">
          <img src={img} alt='img'/>
          <h2 className='text-uppercase text-white my-3'>start Framework</h2>
          <div className="star-with-lines">
            <div className="line"></div>
            <i className="fas fa-star star-icon"></i>
            <div className="line"></div>
          </div>
          <p className='my-3 text-light'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </div>
  */

  /*About
            <div className="about">
        <div className="cotainer">
          <div className="content">
          <h2 className='text-uppercase text-white my-3'>about component</h2>
          <div className="star-with-lines">
            <div className="line"></div>
            <i className="fas fa-star star-icon"></i>
            <div className="line"></div>
          </div>
          <div className="row text-light justify-content-center text-start py-3">
            <div className="col-md-5">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md-5">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
          </div>
        </div>
      </div>
  */

  /*portfolio
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
                <img src={portfolio1}/>
                <div className="caption text-center">
                  <h2 className='text-light'><i class="fa-solid fa-plus"></i></h2>
                </div>
              </div>
              <div className="col-lg-4 my-3 position-relative col-md-6 col-sm-12">
                <img src={portfolio2}/>
                <div className="caption text-center">
                  <h2 className='text-light'><i class="fa-solid fa-plus"></i></h2>
                </div>
              </div>
              <div className="col-lg-4 my-3 position-relative col-md-6 col-sm-12">
                <img src={portfolio3}/>
                <div className="caption text-center">
                  <h2 className='text-light'><i class="fa-solid fa-plus"></i></h2>
                </div>
              </div>
              <div className="col-lg-4 my-3 position-relative col-md-6 col-sm-12">
                <img src={portfolio1}/>
                <div className="caption text-center">
                  <h2 className='text-light'><i class="fa-solid fa-plus"></i></h2>
                </div>
              </div>
              <div className="col-lg-4 my-3 position-relative col-md-6 col-sm-12">
                <img src={portfolio2}/>
                <div className="caption text-center">
                  <h2 className='text-light'><i class="fa-solid fa-plus"></i></h2>
                </div>
              </div>
              <div className="col-lg-4 my-3 position-relative col-md-6 col-sm-12">
                <img src={portfolio3}/>
                <div className="caption text-center">
                  <h2 className='text-light'><i class="fa-solid fa-plus"></i></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  */

  /*Contact
<div className="contact">
        <div className="container">
          <div className="content">
            <h2 className='text-uppercase my-3'>conatct section</h2>
            <div className="star-with-lines">
              <div className="line"></div>
              <i className="fas fa-star star-icon"></i>
              <div className="line"></div>
            </div>
            <div className="input-display w-100 py-3 margin-top">
            {inputName && <div className="display-text">userName :</div>}
              <br/>
              <input
                type="text"
                value={inputName}
                className='w-50'
                onChange={handleInputName}
                placeholder="userName"
              />
            </div>
            <div className="input-display w-100 py-3">
            {inputAge && <div className="display-text">userAge :</div>}
              <br/>
              <input
                type="text"
                value={inputAge}
                className='w-50'
                onChange={handleInputAge}
                placeholder="userAge"
              />
            </div>
            <div className="input-display w-100 py-3">
            {inputEmail && <div className="display-text">userEmail :</div>}
              <br/>
              <input
                type="text"
                value={inputEmail}
                className='w-50'
                onChange={handleInputEmail}
                placeholder="userEmail"
              />
            </div>
            <div className="input-display w-100 py-3">
            {inputPassword && <div className="display-text">userPassword :</div>}
              <br/>
              <input
                type="text"
                value={inputPassword}
                className='w-50'
                onChange={handleInputPassword}
                placeholder="userPassword"
              />
            </div>
            <button className='btn btn-success my-3'>Send Message</button>
          </div>
        </div>
      </div>
      
  */



}
