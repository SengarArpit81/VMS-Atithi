import React from 'react';
import {Link} from 'react-router-dom';


const Rejectedvisitor = () => {
  return (
    <>
    <div className="container-fluid bg-light">
      <div className="row mt-4 pb-4">
        <div className="col-5">
          <h3>
          <Link to="/" style={{textDecoration:"none"}}>
          <div>
            <h4 className="menubar-tag-h4">
          <span>A</span>thithi {" "}
         <span>B</span>ook
         </h4>
         </div>
         </Link>
            <b>Rejected Visitors List</b>
          </h3>

        </div>

        <div className="col-2"></div>
        <div className="col-5 text-end" >
          
        </div>
      </div>

      <div className="Main-container-counter bg-white">
        <div className="row ">
          <div className="col counter-text">

            <nav className="navbar ">
              <form className="container-fluid">
                <div className="input-group d-flex">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="search"
                  />

                  <Link to="/addvisitors" className='d-flex textDecoration-none'><button >
                  Add Visitors
                  </button>
                  </Link>
                  
                  
                </div>
              </form>
            </nav>
          </div>
            
        </div>
      </div>
      <div className="table-contaier">

            <table className="table bg-white mt-4 gap-3 pb-4 ;">

              <thead>
                <tr className="bg-light gap-3 text-danger fs-6 justify-content-around">
                  <th className="text-center">S. No</th>
                  <th className="text-center">First name</th>
                  <th className="text-center">Last name</th>
                  <th className="text-center">Email ID</th>
                  <th className="text-center">Phone</th>
                  <th className="text-center">Address</th>
                  <th className="text-center">AadharCardNo. </th>
                  <th className="text-center"> Date</th>
                  <th className="text-center">Time</th>

                </tr>
              </thead>
              
              <tbody>
              <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>sengar.apt85@gmail.com</td>
              <td>987654345</td>
              <td>B-455 GreenField</td>
              <td>381586871995</td>
              <td>12-11-2022</td>
              <td>03:30 PM</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>sengar.apt85@gmail.com</td>

              <td>987654345</td>
              <td>B-455 GreenField</td>
              <td>381586871995</td>
              <td>12-11-2022</td>
              <td>03:30 PM</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>sengar.apt85@gmail.com</td>

              <td>987654345</td>
              <td>B-455 GreenField</td>
              <td>381586871995</td>
              <td>12-11-2022</td>
              <td>03:30 PM</td>

            </tr>
              </tbody>
              
              
            </table>
          </div>


    </div>
    </>
  );
}

export default Rejectedvisitor;
