import {PropTypes} from "prop-types";
import React from 'react'

export const UsersPage= (props)=>{

var usersList = props.users.map((u,i)=>{
    return <h2 key={'user'+i}>{u.name + " " + u.lastName + " " + u.id }</h2>
});

return <div>
        <h1>Users</h1>
        {usersList}
        </div>
}

UsersPage.prototype={
    users:PropTypes.array.isRequired
}