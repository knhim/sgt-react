import React from 'react';

function Header(props) {
  return (
    <div className="header">
      <h1>Student Grade Table</h1>
      <h4>Average Grade <span className="badge badge-secondary">{props.averageGrade}</span></h4>
    </div>
  );
}

export default Header;
