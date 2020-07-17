import React from 'react';

function Grade(props) {
  return (
    props.grades.map((objectGrades, index) =>
      <tr key={index}>
        <td>{objectGrades.name}</td>
        <td>{objectGrades.course}</td>
        <td>{objectGrades.grade}</td>
      </tr>
    )
  );
}

export default Grade;
