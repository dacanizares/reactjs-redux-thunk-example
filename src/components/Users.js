import React from 'react'
import User from './User'
import { Row, Col, CardDeck } from 'reactstrap'

const Users = ({usersData, fetchData}) =>  {   
  return (
    <>
      <Row>
        <CardDeck>
          {usersData.map((user) => 
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
            onClick={() => fetchData()} >
            Update
          </button>
        </Col>
      </Row>
    </>
  );
}

export default Users;