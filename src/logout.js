import React from 'react'

export default function Logout() {
    const DeleteHandler = ()=>{
        sessionStorage.removeItem('Name')
        sessionStorage.removeItem('Password')
        sessionStorage.setItem('isLoggedIn', false)
        window.location.reload();
      }
  return (
    <div>
        <button onClick={DeleteHandler}>Logout</button>
    </div>
  )
}
