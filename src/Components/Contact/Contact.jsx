import React, { useState , useEffect} from 'react'


export default function Contact() {
  const [title, setTitle] = useState('Contact-Us'); // Initialize state with "Contact-Us"

  // Use useEffect to update the document title when the component mounts
  useEffect(() => {
    document.title = title; // Set the document title to the value of title state
  }, [title]); // Dependency array with title, so it updates when title changes


  const [inputName, setInputName] = useState('');

  // Function to handle input change
  const handleInputName = (event) => {
    setInputName(event.target.value);
  };
  const [inputAge, setInputAge] = useState('');

  // Function to handle input change
  const handleInputAge = (event) => {
    setInputAge(event.target.value);
  };
  const [inputEmail, setInputEmail] = useState('');

  // Function to handle input change
  const handleInputEmail = (event) => {
    setInputEmail(event.target.value);
  };
  const [inputPassword, setInputPassword] = useState('');

  // Function to handle input change
  const handleInputPassword = (event) => {
    setInputPassword(event.target.value);
  };
  return (
    <>
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
    </>
  )
}
