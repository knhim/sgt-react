import React from 'react';
import Grade from './grade';

function GradeTable(props) {
  return (
    <table className="table table-bordered table-striped">
      <thead className="thead-light">
        <tr>
          <th scope="col">Student Name</th>
          <th scope="col">Course</th>
          <th scope='col'>Grade</th>
        </tr>
      </thead>
      <tbody>
        <Grade grades={props.grades} />
      </tbody>
    </table>
  );
}

export default GradeTable;
