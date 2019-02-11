import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from './class_names';
import ClassesNesting from './classes_nesting';

class Mui extends React.Component {
  render() {
    return (
      <div>
        <ClassNames />
        <ClassesNesting />
      </div>
    );
  }
}

ReactDOM.render(<Mui />, document.getElementById('root'));
