import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userID} = useParams();
  return (
    <div>userID: <b>{userID}</b></div>
  )
}

export default User