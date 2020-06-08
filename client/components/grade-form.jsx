import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grade: {
        course: null,
        name: null,
        grade: null
      }
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      grade: {
        course: this.state.grade.course,
        name: event.target.value,
        grade: this.state.grade.grade
      }
    });
  }

  handleCourseChange(event) {
    this.setState({
      grade: {
        course: event.target.value,
        name: this.state.grade.name,
        grade: this.state.grade.grade
      }
    });
  }

  handleGradeChange(event) {
    this.setState({
      grade: {
        course: this.state.grade.course,
        name: this.state.grade.name,
        grade: Number(event.target.value)
      }
    });
  }

  handleSubmit() {
    const newGrade = this.state.grade;
    this.props.addGrade(newGrade);
    event.preventDefault();
  }

  handleReset() {
    this.setState({
      grade: {
        course: null,
        name: null,
        grade: null
      }
    });
  }

  render() {
    return (
      <div>
        <h3>Add Grade</h3>

        <form onSubmit= {this.handleSubmit} onReset={this.handleReset} method= "post" >
          <div className="form-group">

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className ="input-group-text"><i className="fas fa-user"></i></span>
              </div>
              <input type="text" id="name" className="form-control" name="name" placeholder="Name" value={this.state.value} onChange = {this.handleNameChange}/>
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="far fa-list-alt"></i></span>
              </div>
              <input type="text" id="course" className="form-control" name="course" placeholder="Course" value={this.state.value} onChange ={this.handleCourseChange} />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-graduation-cap"></i></span>
              </div>
              <input type="text" id="grade" className="form-control" name="grade" placeholder="Grade" value={this.state.value} onChange ={this.handleGradeChange}/>
            </div>

            <button type="submit" className="btn btn-success mr-1">Add</button>
            <button type="reset" className="btn btn-outline-secondary" >Cancel</button>

          </div>
        </form>

      </div>
    );
  }

}

export default GradeForm;
