import React from 'react';
import Grade from './grade';

function GradeTable(props) {
  const gradesArray = props.grades;

  const mapGrades = gradesArray.map((objectGrades, index) =>
    <Grade key={index} name={objectGrades.name} course={objectGrades.course} grade={objectGrades.grade} onDelete={props.onDelete}/>
  );

  return (
    <table className="col-7 table table-bordered table-striped">
      <thead className="thead-light">
        <tr>
          <th scope="col">Student Name</th>
          <th scope="col">Course</th>
          <th scope='col'>Grade</th>
          <th scope='col'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {mapGrades}
      </tbody>
    </table>
  );
}

export default GradeTable;
