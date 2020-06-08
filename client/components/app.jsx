import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.addNewGrade = this.addNewGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => {
        this.setState({
          grades: data
        });
      })
      .catch(err => {
        console.error('error:', err);
      });
  }

  addNewGrade(newGrade) {
    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGrade)
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          grades: this.state.grades.concat(data)
        });
      })
      .catch(err => console.error(err));
  }

  deleteGrade(id) {
    fetch(`api/grades/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          grades: this.state.grades.filter(grade => grade.id !== id)
        });
      });
  }

  getAverageGrade() {
    if (this.state.grades.length) {
      let gradesTotal = null;
      const gradesCount = this.state.grades.length;

      for (let i = 0; i < this.state.grades.length; i++) {
        gradesTotal += this.state.grades[i].grade;
      }

      const avgGrade = Math.round(gradesTotal / gradesCount);
      return avgGrade;
    }
  }

  render() {
    const averageGrade = this.getAverageGrade();
    const header = <Header title='Student Grade Table' averageGrade = {averageGrade} />;

    const gradeTable = <GradeTable grades = {this.state.grades} deleteGrade = {this.deleteGrade} />;

    const gradeForm = <GradeForm addGrade = {this.addNewGrade} />;

    return (
      <div>
        {header}
        <div className="container">
          <div className="row">
            <div className="col-8">
              {gradeTable}
            </div>
            <div className="col-4">
              {gradeForm}
            </div>
          </div>
        </div>

      </div>
    );
  }

}

export default App;
