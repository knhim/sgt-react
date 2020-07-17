import React from 'react';

function Header(props) {
  return (
    <div className="row justify-content-between">
      <h1 className="col-7">Student Grade Table</h1>
      <h4 className="col-5 align-self-center text-right">Average Grade <span className="badge badge-secondary">{props.averageGrade}</span></h4>
    </div>
  );
}

export default Header;
