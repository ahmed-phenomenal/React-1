import React, { useState , useEffect} from 'react'
import img from '../../IMG/Error/404-status-code.png'
export default function Error() {

  const [title, setTitle] = useState('Error 404 - Page Not Found'); // Initialize state with "portfolio"

    // Use useEffect to update the document title when the component mounts
    useEffect(() => {
      document.title = title; // Set the document title to the value of title state
    }, [title]); // Dependency array with title, so it updates when title changes
  return (
    <>
      <div className="error">
        <div className="image">
          <img src={img}></img>
        </div>
      </div>

    </>
  )
}
