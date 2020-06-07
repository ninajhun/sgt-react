import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
    this.getAverageGrade = this.getAverageGrade.bind(this);
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

  getAverageGrade() {
    let gradesTotal = null;
    const gradesCount = this.state.grades.length;

    for (let i = 0; i < this.state.grades.length; i++) {
      gradesTotal += this.state.grades[i].grade;
    }

    const avgGrade = Math.round(gradesTotal / gradesCount);

    return avgGrade;

  }

  render() {
    const header = <Header title='Student Grade Table' />;
    const gradeTable = <GradeTable grades = {this.state.grades} />;

    return (
      <div>
        {header}
        {gradeTable}
      </div>
    );
  }

}

export default App;
