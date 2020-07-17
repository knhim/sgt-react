import React from 'react';
import Header from './header';
import GradeTable from './gradeTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
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

    return (
      <>
        <Header />
        <GradeTable grades={this.state.grades}/>
      </>

    );
  }
}

export default App;
