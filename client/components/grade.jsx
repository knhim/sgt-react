import React from 'react';

function Grade(props) {
  return (
    props.grades.map((object, index) =>
      <tr key={index}>
        <td>{object.name}</td>
        <td>{object.course}</td>
        <td>{object.grade}</td>
      </tr>
    )
  );
}

export default Grade;
