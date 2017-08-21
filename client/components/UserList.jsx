import React, {Component} from 'react';
import propTypes from 'prop-types';
import User from './User.jsx';

class UserList extends Component{
  render(){
    const {users} = this.props;
    let i = 0;
    return(
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Online Users</h4>
        </li>
        <div className="users-holder">
          {
            users.map(user => <User key={++i} username={user.username} />)
          }         
        </div>
      </ul>
    );
  }
}

export default UserList;

UserList.propTypes = {
  users: propTypes.array.isRequired
}