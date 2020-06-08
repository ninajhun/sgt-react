import React from 'react';

function Header(props) {
  return (
    <div className= "container mt-4">
      <div className="row align-items-center">
        <div className ="col-9">
          <h1>{props.title} </h1>
        </div>
        <div className="col-3">
          <h4> Average Grade <span className="badge badge-secondary">{props.averageGrade}</span> </h4>
        </div>
      </div>

    </div>
  );

}

export default Header;
