import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { initialState: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ initialState: event.target.value });
  }

  render() {
    return (
      <>
        <form>
          <label>Name</label>
          <input type="text" value={this.state.initialState} onChange={this.handleChange} />
          <label>Course</label>
          <input type="text" />
          <label>Grade</label>
          <input type="text" />
        </form>
        <button>Add</button>
        <button>Cancel</button>
      </>
    );
  }
}
