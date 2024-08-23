import React, { useState , useEffect} from 'react'
export default function About() {
  const [title, setTitle] = useState('About'); // Initialize state with "about"

  // Use useEffect to update the document title when the component mounts
  useEffect(() => {
    document.title = title; // Set the document title to the value of title state
  }, [title]); // Dependency array with title, so it updates when title changes

  return (
    <>
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

    </>
  )
}
