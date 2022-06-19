import React from 'react'
import UserRow from './UserRow'

const UserList = ({ users }) => {
    return (
        <>
            {users.map((user) => (
                <UserRow username={user} />
            ))}
        </>
    )
}

export default UserList