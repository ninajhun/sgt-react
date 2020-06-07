import React from 'react';
import Grade from './grade';

class GradeForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Add Grade</h3>

        <form action="POST">
          <div className="form-group">

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className ="input-group-text"><i className="fas fa-user"></i></span>
              </div>
              <input type="text" id="name" className="form-control" name="name" placeholder="Name"/>
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="far fa-list-alt"></i></span>
              </div>
              <input type="text" id="course" className="form-control" name="course" placeholder="Course" />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-graduation-cap"></i></span>
              </div>
              <input type="text" id="grade" className="form-control" name="grade" placeholder="Grade" />
            </div>

            <button type="submit" className="btn btn-success mr-1">Add</button>
            <button type="reset" className="btn btn-outline-secondary">Cancel</button>

          </div>

        </form>

      </div>
    );
  }

}

export default GradeForm;
