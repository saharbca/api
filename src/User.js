import React from 'react'
import {  Card } from 'react-bootstrap'
import './App.css';

const User = ({ user }) => {
    return (
            <div className="div ">
            <div className="c p">
            <Card style={{ width: '19rem' , height: '570px',marginLeft:'0'}} >
                    <span className="name">{user.username}</span>
                    <Card.Body>
                    <Card.Title >
                       <span className="style"> Name:</span> {user.name}
                    </Card.Title>
                    <Card.Text >
                    <span className="style"> username:</span> {user.username}
                    </Card.Text>   
                    <Card.Text >
                    <span className="style"> Email:</span> {user.email}
                    </Card.Text>
                    <Card.Text>
                    <span className="style"> Phone:</span> {user.phone}
                    </Card.Text>
                    </Card.Body>
            </Card>
        </div>
        </div>
    )
}
export default User