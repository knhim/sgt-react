import React from 'react';

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
      <Header/>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <h1>Student Grade Table</h1>
    );
  }
}

export default App;
