import React from 'react';
import Grade from './grade';

function GradeTable(props) {
  return (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th>Student Name</th>
          <th>Course</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        <Grade grades={props.grades} />
      </tbody>
    </table>
  );
}

export default GradeTable;
