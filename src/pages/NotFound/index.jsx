import React from "react";
import {Link} from 'react-router-dom';

const NotFound = () => {
  return ( 
    <div className=" flex flex-col items-center gap-8">
      <p>
        <strong>Opps! Something went wrong</strong>
      </p>
      <button>
        <Link to="/">Back To Home</Link>
      </button>
    </div>
   );
}
 
export default NotFound;