import React from 'react';
import Sidebar from './sidebar';
import AllUserComponent from './allUserComponent';

class Main extends React.Component {

  render() {
    return (
      <div className="main-container">
        <Sidebar />
        <AllUserComponent />
      </div>
    );
  }
}

export default Main;