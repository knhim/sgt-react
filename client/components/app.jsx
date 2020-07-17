import React from 'react';
import Header from './header';
import GradeTable from './gradeTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
  }

  getAverageGrade() {
    const gradesArray = this.state.grades;
    let total = 0;
    let avgGrade = 0;
    for (let i = 0; i < gradesArray.length; i++) {
      total += gradesArray[i].grade;
    }
    avgGrade = Math.ceil(total / gradesArray.length);
    return avgGrade.toString();
  }

  componentDidMount() {
    const fetchRequest = fetch('/api/grades');
    fetchRequest.then(response => {
      response.json().then(data => {
        this.setState({ grades: data });
      });
    });
  }

  render() {
    const averageGrade = this.getAverageGrade();
    return (
      <div className="container">
        <Header averageGrade={averageGrade}/>
        <GradeTable grades={this.state.grades}/>
      </div>

    );
  }
}

export default App;
