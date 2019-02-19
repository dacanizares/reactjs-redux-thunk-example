import React from 'react'
import User from './User'
import { Row, Col, CardDeck } from 'reactstrap'

const Users = ({usersList, fetchUsers}) =>  {   
  return (
    <>
      <Row>
        <CardDeck>
          {usersList.map((user) => 
            <User 
              email={user.email} 
              name={`${user.name.title} ${user.name.last}`} 
              avatarUrl={user.picture.large} 
              key={user.id.value} />    
          )}
        </CardDeck>
      </Row>
      
      <Row className='mt-3'>
        <Col xs='12'>
          <button 
            className='btn btn-primary btn-lg' 
            onClick={() => fetchUsers()} >
            Update
          </button>
        </Col>
      </Row>
    </>
  );
}

export default Users;