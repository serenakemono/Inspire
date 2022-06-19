import React from 'react'
import UserList from './UserList'

const UsersDisplay = ({ users, cat }) => {
    return (
        <div className="row">
            {users.length ? (
                <UserList users={ users } />
            ) : (
                <p>No {cat} to display.</p>
            )}
        </div>
    )
}

export default UsersDisplay