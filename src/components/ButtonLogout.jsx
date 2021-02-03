import React from 'react'
function LogoutButton (props) {
  function logout () {
    props.SetisLogin()
  }

  return (
    <div>
      <button onClick={logout}>LOGOUT</button>
    </div>
  )
}

export default LogoutButton
