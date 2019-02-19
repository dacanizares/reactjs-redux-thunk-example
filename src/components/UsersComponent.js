import React from 'react'
import Users from './Users'

class UsersComponent extends React.Component {
  
  componentDidMount() {
    this.props.fetchUsers()
  }

  render(){
    if (this.props.loading) {
      return (
        <h1>Loading data</h1>
      )
    } else {
      return (
        <Users usersList={this.props.usersData} fetchUsers={this.props.fetchUsers} />
      )
    }
  }
}

export default UsersComponent;