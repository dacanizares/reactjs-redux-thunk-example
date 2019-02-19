import React from 'react'
import { Card, CardImg, CardBody, CardText } from 'reactstrap'

const User = ({avatarUrl, name, email}) => {
  return(
    <Card>
      <CardImg top src={avatarUrl} alt={name} />
      <CardBody>
        <h3>{name}</h3>
        <CardText>
            {email}
        </CardText>
      </CardBody>
    </Card>
  );
}

export default User;