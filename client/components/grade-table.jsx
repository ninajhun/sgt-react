import React from 'react';
import Grade from './grade';

class GradeTable extends React.Component {
  constructor(props) {
    super(props);
    this.getGradeRows = this.getGradeRows.bind(this);
  }

  getGradeRows() {
    const gradeRows = [];
    for (let i = 0; i < this.props.grades.length; i++) {
      gradeRows.push(<Grade key={ this.props.grades[i].id} grade= { this.props.grades[i] } />);
    }
    return gradeRows;
  }

  render() {
    const newGrades = this.getGradeRows();

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {newGrades}
        </tbody>
      </table>
    );
  }

}

export default GradeTable;
