import React from 'react';
import Header from './header';
import GradeTable from './gradeTable';
import GradeForm from './gradeForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
    this.addNewGrade = this.addNewGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }

  componentDidMount() {
    const fetchRequest = fetch('/api/grades');
    fetchRequest.then(response => {
      response.json().then(data => {
        this.setState({ grades: data });
      });
    });
  }

  getAverageGrade() {
    const gradesArray = this.state.grades;
    let total = 0;
    let avgGrade = 0;
    for (let i = 0; i < gradesArray.length; i++) {
      total += parseInt(gradesArray[i].grade);
    }
    avgGrade = Math.ceil(total / gradesArray.length);
    return avgGrade.toString();
  }

  addNewGrade(newGrade) {
    const url = '/api/grades';
    const init =
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGrade)
    };
    const fetchRequest = fetch(url, init);
    fetchRequest.then(response => {
      response.json().then(data => {
        const newArray = [...this.state.grades];
        newArray.push(data);
        this.setState({ grades: newArray });
      });
    });
  }

  deleteGrade(id) {
    const newArray = [...this.state.grades];
    let index = null;
    for (let i = 0; i < newArray.length; i++) {
      if (id === newArray[i].id) {
        index = i;
      }
    }
    newArray.splice(index, 1);

    const url = `/api/grades/${id}`;
    const init =
    {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json ' }
    };
    const fetchRequest = fetch(url, init);
    fetchRequest.then(response => {
      response.json().then(data => {
        this.setState({ grades: newArray });
      });
    });
  }

  render() {
    const averageGrade = this.getAverageGrade();
    return (
      <div className="container">
        <Header averageGrade={averageGrade} />
        <div className="row">
          <GradeTable grades={this.state.grades} onDelete={this.deleteGrade}/>
          <GradeForm onAdd={this.addNewGrade} />
        </div>
      </div>

    );
  }
}

export default App;
