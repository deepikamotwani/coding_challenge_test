import React, { Component, PropTypes } from 'react';
import UserList from './../../user.json';

class AllUserComponent extends Component {
  constructor(props) {
   
    super(props);
      this.state = { 
        userDetails: props.userDataList,
        searchString: ''
      };
      this.handleChange=this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ searchString: e.target.value });
  }

  render() {
    let userData = this.state.userDetails.userList;
    const searchString = this.state.searchString.trim().toLowerCase();

    if (searchString.length > 0) {
      userData = userData.filter(l => {
        return l.name.toLowerCase().match(searchString);
      });
    }
    return (
      <div className="alluser-content">
        <h2>All Users</h2>
        <div class="search-box">
          <form class="search-form">
            <input class= "form-control glyphicon glyphicon-search" placeholder="search" type="text" value={this.state.searchString} onChange={this.handleChange} />
            <span class="glyphicon glyphicon-search"></span>
          </form>
        </div>
        <div className="users-data">
              <ul>
                {userData.map(items =>
                  <li key={items.id}>
                    <span>{items.name}</span>
                    <span>{items.email}</span>
                  </li>
                )}
              </ul>
            </div>
      </div>
    );
  }
}

AllUserComponent.defaultProps = {
  userDataList: UserList
};

AllUserComponent.propTypes = {
  userDataList: PropTypes.arrayOf(
    PropTypes.shape(
      {
        key: PropTypes.string,
        value: PropTypes.string,
        count: PropTypes.number,
        selected: PropTypes.bool
      }
    )
  )
};

export default AllUserComponent;