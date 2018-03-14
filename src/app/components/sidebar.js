import React from 'react';

class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      users:['All Users', 'Favourites', 'Administrators', 'Non-Admins', 'Archived']
    };
  }

  render() {
    const userList = this.state.users;
    return (
      <div className="sidebar-content">
        <h2>Users</h2>
        <div classNames="user-list">
          <ul>
            {userList.map(items => 
              <li key={items.id}>
                <a href="">{items}</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;