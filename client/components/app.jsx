import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
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
