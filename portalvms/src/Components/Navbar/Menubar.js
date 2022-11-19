import React from 'react';
import { Link } from 'react-router-dom';

const Menubar = () => {
  return (
    <div>
        {/* <Link to="signin">Signin</Link>
        <Link to="Signup">Singnp</Link> */}
        <a href='signin'>Signin</a>
        <a href='Signup' className='mx-4'>Signup</a>
    </div>
  )
}

export default Menubar