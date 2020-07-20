import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state =
    {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCourse = this.handleChangeCourse.bind(this);
    this.handleChangeGrade = this.handleChangeGrade.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeCourse(event) {
    this.setState({ course: event.target.value });
  }

  handleChangeGrade(event) {
    this.setState({ grade: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const addNewGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.onAdd(addNewGrade);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <div className="col-5">
        <form onSubmit={this.handleSubmit}>

          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <i className="fa fa-user input-group-text"></i>
            </div>
            <input type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={this.handleChangeName} />
          </div>

          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <i className="fa fa-list-alt input-group-text"></i>
            </div>
            <input type="text" className="form-control" placeholder="Course" value={this.state.course} onChange={this.handleChangeCourse} />
          </div>

          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <i className="fa fa-graduation-cap input-group-text"></i>
            </div>
            <input type="text" className="form-control" placeholder="Grade" value={this.state.grade} onChange={this.handleChangeGrade} />
          </div>

          <div>
            <button className="btn btn-success" type="submit">Add</button>
            <button className="btn btn-outline-secondary ml-2" type="reset">Cancel</button>
          </div>

        </form>
      </div >
    );
  }
}
